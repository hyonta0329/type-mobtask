import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { actionCreator, RootState } from '../modules';
import { connect } from 'react-redux'
import { putTicket } from '../modules/todos/Load'
import { type } from 'os';
import { DropdownButton, Dropdown, Button, Table} from 'react-bootstrap';
import '../style.css';

type Props = {
    //20200516
    onSubmit: (TaskID: string, OperationType: string, TaskStatus: string) => void;
    TaskID: string;
    TaskStatus: string;
    Due: string;
    //onClick: any;
    //dispatch: Dispatch<Action>;
}

type State = {
    value: any;
    TaskID: string;
    OperationType: string;
    TaskStatus: string;
    Due: string;
    show: boolean;
}


class Component extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state={
           value: {}, 
           TaskID: 'None',
           OperationType: 'none',
           TaskStatus: 'None',
           show: true,
           Due: this.props.Due,
        } 
    }
    handleSubmitDelete(event: React.FormEvent<HTMLFormElement>) {
        if(window.confirm('Are you sure to delete this task?')){
            console.log('login button clicked...');
            event.preventDefault();
            //const TaskID = this.state.Comment;
            //20200516
            const TaskID = this.props.TaskID;
            this.props.onSubmit(TaskID, 'delete', 'NS');
            this.setState({ value: '' });
        }else{
            window.alert('cancelled');
        }

    }

    handleSubmitTransition(event: React.FormEvent<HTMLFormElement>) {
        console.log('login button clicked...');
        event.preventDefault();
        //const TaskID = this.state.Comment;
        //20200516
        const TaskID = this.props.TaskID;
        const TaskStatus = this.props.TaskStatus;
        this.props.onSubmit(TaskID, 'update', TaskStatus);
        this.setState({ value: '' });
    }

    handleClose(event: any){
        this.setState({show: false});
    }
    handleShow(event: any){
        this.setState({show: false});
    }
    // newDue = this.props.Due.replace('-', '-\n');
    
    

    render() {
            const newDue = this.props.Due.replace('-', '-\n');
            const DayArray = ["日", "月", "火", "水", "木", "金", "土"];
            const DateOfDue = new Date(this.props.Due).getDay();
            console.log(DateOfDue);
            const SupplementDayInfo = DayArray[DateOfDue];

            return (
            <div>
                {newDue + "-" + SupplementDayInfo}
                <Table size="sm">
                    <tbody>
                            <tr id="buttontable">
                            <td>
                            <form onSubmit={(e) => { this.handleSubmitTransition(e); } }>
                                    <Button className="btn btn-pale" type="submit" size="sm">⇄</Button>
                                </form>
                            </td>
                            <td>
                                <form onSubmit={(e) => { this.handleSubmitDelete(e); } }>
                                    <Button className="btn btn-pale" type="submit" size="sm">-</Button>
                                </form>
                            </td></tr>
                        </tbody>
                </Table>
            </div>
            );
        }
}

//AdHoc Version
/*
                    <tbody>
                            <tr id="buttontable">
                            <td>
                            <form onSubmit={(e) => { this.handleSubmitTransition(e); } }>
                                    <Button className="btn btn-pale" type="submit" size="sm">⇄</Button>
                                </form>
                            </td></tr>
                            <tr id="buttontable">
                            <td>
                                <form onSubmit={(e) => { this.handleSubmitDelete(e); } }>
                                    <Button className="btn btn-pale" type="submit" size="sm">-</Button>
                                </form>
                            </td></tr>
                        </tbody>

*/

//Dropdown
/*
                <DropdownButton id="" variant="Info" title="" className="btn btn-pale" size="sm">
                    <Dropdown.Item href="#/action-1">
                        <form onSubmit={(e) => { this.handleSubmitTransition(e); } }>
                            <Button className="btn btn-pale" type="submit">Transition</Button>
                        </form>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        <form onSubmit={(e) => { this.handleSubmitDelete(e); } }>
                            <Button className="btn btn-pale" type="submit">Delete</Button>
                        </form>
                    </Dropdown.Item>
                </DropdownButton>
*/


// https://stackoverflow.com/questions/44169787/how-can-i-change-tabs-in-react-bootstrap-using-a-button
// https://codepen.io/lemanse/pen/ZbwJxe?limit=all&page=8&q=react&__cf_chl_jschl_tk__=5f2eb57b25a5448437cb2019b9010a8cf6cf2648-1589761204-0-AUnNR89OtWM7gAvv8sG7fzWKZm84XM9h0KSsmOMKe0VganiOQoY2zm18UHNGj4ZU4nlhOFfnCEJOqdjDJNkQAz0rCra3tVB7u7uy0Lq6Llto9G6gipkSCLOVk9ScFRAcgPFHRDyHc1yDBuG_7J4GeQCnRwYT6MIPaXGTOTkne3dSso3m9XF0O7XsXR2mm0_80FqYJnhHxGIVr2XAhCg8r87lR1oup7PJdtxM--TlPLpZYjDRZOKldsUE6YVVE5xS4TypLDcaELzlC9fMx8ssw9NzLsLoS3lrxPjEwXdZSer__v4unUEIEMQjJPcdECr6JLPAeA_dNPd1wscVe2cTdRIRf1pIZhstHdm6eHwS6hmnSvYVlTSpBZb_AfZ0r3wXPfbhmYwWO5jhIm1IkNrb5kQ
//    <input className="btn btn-lg btn btn-pale btn-block" type="button" value="ログインする" onClick={e => dispatchEvent(sendLogin(payload))} />
export default Component