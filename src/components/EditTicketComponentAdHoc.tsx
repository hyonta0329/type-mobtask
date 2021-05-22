import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { actionCreator, RootState } from '../modules';
import { connect } from 'react-redux'
import { type } from 'os';
import { Button, Table, DropdownButton, Dropdown} from 'react-bootstrap';
import '../style.css';
import $ from "jquery";

type Props = {
    //20200516
    onSubmit: (TaskID: string, type: string, title: string, Comment: string, Due: string, timezone: string) => void;
    TaskID: string;
    TaskStatus: string;
    title: string;
    Comment: string;
    Due: string;
    timezone: string;
    //onClick: any;
    //dispatch: Dispatch<Action>;
}

type State = {
    value: any;
    TaskID: string;
    OperationType: string;
    TaskStatus: string;
    show: boolean;
    title: string;
    Comment: string;
    Due: string;
    timezone: string;
}

var text = '';

class Component extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state={
           value: 'hidden', 
           TaskID: this.props.TaskID,
           OperationType: 'edit_title',
           TaskStatus: this.props.TaskStatus,
           show: true,
           title: this.props.title,
           Comment: this.props.Comment,
           Due: this.props.Due,
           timezone: "NA",
        } 
    }
    handleSubmitEdit(event: React.FormEvent<HTMLFormElement>) {
        
            event.preventDefault();
            //const TaskID = this.state.Comment;
            //20200516
            const TaskID = this.props.TaskID;
            this.props.onSubmit(TaskID, 'edit_title', this.state.title, this.state.Comment, this.state.Due, this.state.timezone);
            //this.setState({ value: '' });
        }

    handleChangeTITLE(event: React.ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        console.log('handleChangeTITLE!');
        this.setState({
            title: event.target.value,
            //value: event.target.value
        })
    }
    handleChangeCOMMENT(event: React.ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        this.setState({
            Comment: event.target.value
        })
    }
    handleChangeCOMMENTtextArea(event: React.ChangeEvent<HTMLTextAreaElement>){
        event.preventDefault();
        this.setState({
            Comment: event.target.value
        })
    }  
    handleChangeDUE(event: React.ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        this.setState({
            Due: event.target.value
        })
    }  

    handleClose(event: any){
        this.setState({show: false});
    }
    handleShow(event: any){
        this.setState({show: false});
    }
    
    handleChangeTIMEZONE(type: any){
        //type.preventDefault();
        this.setState({
            timezone: type
        })
        console.log(type);
    } 

    showPopUp(){
        text = this.state.title;
        console.log(text);
        $('#edittitle').val(this.state.title);
        setTimeout(function(){
            $('#popup, #layer').show();
        }, 500);
    }
    closePopUp(){
        $('#popup, #layer').hide();
    }

    showTable(event: any, id: string){
        if(this.state.value==='hidden'){
            $('#hiddentable'+id).show()
            this.setState({value: 'show'})
        }else{
            $('#hiddentable'+id).hide()
            this.setState({value: 'hidden'})
        }
        

    }

    render() {
            const title = this.state.title;
            const comment = this.state.Comment
            return (
                <div>
                    {this.props.title}&nbsp;<Button size="sm" className="btn btn-pale" onClick={(e: any) => {this.showTable(e, this.state.TaskID);}}>✏︎</Button>
                    <Table id={"hiddentable"+this.state.TaskID}　className="hiddentable">
                        <tr>
                            <td id="edithead">
                                title:
                            </td>
                        </tr>
                        <tr>
                            <td id="edithead"> 
                                <input type="text"　size={10} value={this.state.title}  id="title" onChange={this.handleChangeTITLE.bind(this)} /> 
                            </td>
                        </tr>
                        <tr>
                                <td id="edithead">Comment: </td></tr>
                        <tr>
                            <td>
                                <textarea value={this.state.Comment} cols={40} rows={17} onChange={this.handleChangeCOMMENTtextArea.bind(this)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Due: </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="date" name="name" id="taskduedate" value={this.state.Due} onChange={(e) => { this.handleChangeDUE(e); }}  />
                            </td>
                        </tr>
                        <tr>
                            <td id="edithead">
                                <form onSubmit={(e) => { this.handleSubmitEdit(e); } }>
                                <Button className="btn btn-pale" type="submit" size="sm">OK</Button></form>
                            </td>
                        </tr>
                    </Table>
            </div>
            );
        }
}



/*
    <Table>
        <tbody>
        <tr>
        <td>
        <input type="text" value={this.state.title}  id="title" onChange={this.handleChangeTITLE.bind(this)} /></td>
        <td><form onSubmit={(e) => { this.handleSubmitEdit(e); } }>
    <Button className="btn btn-pale" type="submit" size="sm">OK</Button></form></td></tr>
    <tr><td></td>
    <td>
    <Button id="close" variant="secondary" onClick={this.closePopUp.bind(this)}>Close</Button>
    </td></tr>
    </tbody>
    </Table>  
*/


//popover version
/*
    render() {
        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Change Title</Popover.Title>
              <Popover.Content>
                <input className="form-control" placeholder="Title" id="title" onChange={(e) => { this.handleChangeTITLE(e); }} />
                <form onSubmit={(e) => { this.handleSubmitEdit(e); } }>
                    <Button className="btn btn-pale" type="submit" size="sm">OK</Button>
                </form>
              </Popover.Content>
            </Popover>
          );
          
          const Example = () => (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button variant="success">✏︎</Button>
            </OverlayTrigger>
          );
            return (
            <div>           
                <Example />
            </div>
            );
        }

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