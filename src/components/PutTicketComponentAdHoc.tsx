import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { actionCreator, RootState } from '../modules';
import { connect } from 'react-redux'
import { putTicket } from '../modules/todos/Load'
import { type } from 'os';
import { Table, Card, Accordion, Tabs, Tab, Button} from 'react-bootstrap';
import '../style.css';
import marked      from 'marked';
import highlightjs from 'highlight.js';

type Props = {
    //20200516
    onSubmit: (payload: any) => void;
    //dispatch: Dispatch<Action>;
}

type State = {
    value: any;
    title: string;
    Due: string;
    Priority: string;
    timezone: string;
    Comment: string;
    Issuetype: string;
    //TaskID: string;
    showModal: boolean;
    show: boolean;
    key: string,

}

class Component extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state={
           value: {}, 
           title: 'title',
           Due: 'due',
           Priority: 'N/A',
           timezone: 'notapplicable',
           Comment: 'comment',
           Issuetype: 'markdown',
           //TaskID: '',
           showModal: false,
           show: false,
           key: '1',
        } 
    }
    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        console.log('login button clicked...');
        event.preventDefault();
        //const Comment = this.state.value;
        //20200516
        const title = this.state.title;
        const Comment = this.state.Comment;
        const Due = this.state.Due;
        const Priority= this.state.Priority;
        const timezone = this.state.timezone;
        const Issuetype = this.state.Issuetype;
        //const TaskID = this.state.Comment;
        const payload = {
                title: title,
                Comment: Comment,
                Due: Due,
                Priority: Priority,
                timezone: timezone,
                Issuetype: Issuetype,
            }
        //20200516
        
        this.props.onSubmit(payload);
        this.setState({ value: '' });
    }
    handleChangeTITLE(event: React.ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        this.setState({
            title: event.target.value
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


    handleShow = (event: any) => this.setState({showModal: true});
    handleClose = (event: any) => this.setState({showModal: false});
    handleSelect = (key: string) => this.setState({key: key});
    
    render() {
            return (
            <div>
                <div className = "container">
                  <div className="wrapper">
                    <div className="card">
                    <div className="card-header" id="header-4b">
                        Create New Ad Hoc Task
                    </div>
                    <Card>
                        <Card.Body>                           
                        <Table className="centerbutton">                            
                            <tbody>
                                <tr>
                                    <td>Title</td>
                                    <td>
                                        <input className="form-control" placeholder="Title" id="title" onChange={(e) => { this.handleChangeTITLE(e); }} />
                                    </td>
                                </tr>
                                <tr>
                                <td>Comment</td>
                                    <td>
                                        <textarea value={this.state.Comment} cols={40} rows={17} onChange={this.handleChangeCOMMENTtextArea.bind(this)}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Due
                                    </td>
                                    <td>
                                        <input type="date" name="name" id="taskduedate" onChange={(e) => { this.handleChangeDUE(e); }}  />
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                    <form onSubmit={(e) => { this.handleSubmit(e); } }>
                                        <Button className="btn btn-pale" type="submit">OK</Button></form>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        </Card.Body>
                        </Card>                                
                    </div>
                    <hr className="colorgraph" />
                  </div>
                  <div className="wrapper"></div>
                    </div>
                </div>
            );
        }
}
// https://stackoverflow.com/questions/44169787/how-can-i-change-tabs-in-react-bootstrap-using-a-button
// https://codepen.io/lemanse/pen/ZbwJxe?limit=all&page=8&q=react&__cf_chl_jschl_tk__=5f2eb57b25a5448437cb2019b9010a8cf6cf2648-1589761204-0-AUnNR89OtWM7gAvv8sG7fzWKZm84XM9h0KSsmOMKe0VganiOQoY2zm18UHNGj4ZU4nlhOFfnCEJOqdjDJNkQAz0rCra3tVB7u7uy0Lq6Llto9G6gipkSCLOVk9ScFRAcgPFHRDyHc1yDBuG_7J4GeQCnRwYT6MIPaXGTOTkne3dSso3m9XF0O7XsXR2mm0_80FqYJnhHxGIVr2XAhCg8r87lR1oup7PJdtxM--TlPLpZYjDRZOKldsUE6YVVE5xS4TypLDcaELzlC9fMx8ssw9NzLsLoS3lrxPjEwXdZSer__v4unUEIEMQjJPcdECr6JLPAeA_dNPd1wscVe2cTdRIRf1pIZhstHdm6eHwS6hmnSvYVlTSpBZb_AfZ0r3wXPfbhmYwWO5jhIm1IkNrb5kQ
//    <input className="btn btn-lg btn btn-pale btn-block" type="button" value="ログインする" onClick={e => dispatchEvent(sendLogin(payload))} />
export default Component