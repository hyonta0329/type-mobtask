import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { actionCreator, RootState } from '../modules';
import PutTicketComponent from '../components/PutTicketComponent';

const mapStateToProps = (state: RootState) => {
    console.log(state);
    return ({
        todos: state.todos,
        //tickets: state.todos,
    })
}

  
//const mapDispatchToProps = dispatch => ({
   //dipatch時の対応考えていなかった
   //setTicket: tickets => dispatch(setTickets(tickets))
  //})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    console.log('revoking onSubmit in Container...');
    return {
        onSubmit: (payload: any) => {
            dispatch(actionCreator.todos.putTicket(payload, 'token'));
            console.log(payload);
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PutTicketComponent);
//ここもSetTicketで変更する