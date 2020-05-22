import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { actionCreator, RootState } from '../modules';
import TransitionOrDeleteComponent from '../components/TransitionOrDeleteComponent';

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
        onSubmit: (TaskID: string, OperationType: string, TaskStatus: string) => {
            dispatch(actionCreator.todos.transitionOrDeleteTicket(TaskID, OperationType, TaskStatus));
            console.log(TaskID+OperationType+TaskStatus);
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransitionOrDeleteComponent);
//ここもSetTicketで変更する