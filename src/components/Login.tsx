import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { actionCreator, RootState } from '../modules';
import { connect } from 'react-redux'
import { sendLogin } from '../modules/Login/Login'

type Props = {
    //20200516
    onSubmit: (payload: any) => void;
    //dispatch: Dispatch<Action>;
}

type State = {
    value: any;
    loginuser: string;
    loginpas: string;
}



class Component extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state={
           value: {
               loginuser: 'none',
               loginpas: 'none'
           }, 
           loginuser: 'none',
           loginpas: 'none'
        } 
    }
    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        console.log('login button clicked...');
        event.preventDefault();
        //const Comment = this.state.value;
        //20200516
        const loginuser = this.state.loginuser;
        const loginpas = this.state.loginpas;
        const payload = {
                username: loginuser,
                pas: loginpas,
            }
        //20200516
        
        this.props.onSubmit(payload);
        this.setState({ value: '' });
    }
    handleChangeUSER(event: React.ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        this.setState({
            loginuser: event.target.value
        })
    }
    handleChangePAS(event: React.ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        this.setState({
            loginpas: event.target.value
        })
    }
    render() {
            return (
                <div>
                <div className = "container">
                  <div className="wrapper">
                    <h3 className="form-signin-heading" >Log In</h3>
                    <hr className="colorgraph" />
                    <form onSubmit={(e) => { this.handleSubmit(e); } }>
                        <input className="form-control" placeholder="Email" id="loginuser" onChange={(e) => { this.handleChangeUSER(e); }} />
                        <input type="password" placeholder="Password" className="form-control" id="loginpas" onChange={(e) => { this.handleChangePAS(e); }} />
                        <input className="btn btn-lg btn btn-pale btn-block" type="submit" value="Log In"  />
                    </form>
                    <br />
                  </div>
                </div>
              </div>
            );
        }
}

//    <input className="btn btn-lg btn btn-pale btn-block" type="button" value="ログインする" onClick={e => dispatchEvent(sendLogin(payload))} />
export default Component