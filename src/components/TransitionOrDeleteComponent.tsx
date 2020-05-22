import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { actionCreator, RootState } from '../modules';
import { connect } from 'react-redux'
import { putTicket } from '../modules/todos/Load'
import { type } from 'os';
import { Table, Card, Accordion, Tabs, Tab, Button} from 'react-bootstrap';
import '../style.css';

type Props = {
    //20200516
    onSubmit: (TaskID: string, OperationType: string, TaskStatus: string) => void;
    TaskID: string;
    TaskStatus: string;
    //dispatch: Dispatch<Action>;
}

type State = {
    value: any;
    TaskID: string;
    OperationType: string;
    TaskStatus: string;
}



class Component extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state={
           value: {}, 
           TaskID: 'None',
           OperationType: 'none',
           TaskStatus: 'None'
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

    render() {
            return (
            <div>
                <form onSubmit={(e) => { this.handleSubmitTransition(e); } }>
                    <Button className="btn btn-pale" type="submit">⇄</Button>
                </form>
                <form onSubmit={(e) => { this.handleSubmitDelete(e); } }>
                    <Button className="btn btn-pale" type="submit">-</Button>
                </form>
            </div>
            );
        }
}
// https://stackoverflow.com/questions/44169787/how-can-i-change-tabs-in-react-bootstrap-using-a-button
// https://codepen.io/lemanse/pen/ZbwJxe?limit=all&page=8&q=react&__cf_chl_jschl_tk__=5f2eb57b25a5448437cb2019b9010a8cf6cf2648-1589761204-0-AUnNR89OtWM7gAvv8sG7fzWKZm84XM9h0KSsmOMKe0VganiOQoY2zm18UHNGj4ZU4nlhOFfnCEJOqdjDJNkQAz0rCra3tVB7u7uy0Lq6Llto9G6gipkSCLOVk9ScFRAcgPFHRDyHc1yDBuG_7J4GeQCnRwYT6MIPaXGTOTkne3dSso3m9XF0O7XsXR2mm0_80FqYJnhHxGIVr2XAhCg8r87lR1oup7PJdtxM--TlPLpZYjDRZOKldsUE6YVVE5xS4TypLDcaELzlC9fMx8ssw9NzLsLoS3lrxPjEwXdZSer__v4unUEIEMQjJPcdECr6JLPAeA_dNPd1wscVe2cTdRIRf1pIZhstHdm6eHwS6hmnSvYVlTSpBZb_AfZ0r3wXPfbhmYwWO5jhIm1IkNrb5kQ
//    <input className="btn btn-lg btn btn-pale btn-block" type="button" value="ログインする" onClick={e => dispatchEvent(sendLogin(payload))} />
export default Component