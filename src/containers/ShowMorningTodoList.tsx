import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { actionCreator, RootState } from '../modules';
import MorningTodoList from '../components/MorningTodoList';

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
    return {
        //20200516 ここをSetTicketで変更する
        onSubmit: (payload: any) => {
            dispatch(actionCreator.todos.addTodo(payload));
            console.log(payload);
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MorningTodoList);
//ここもSetTicketで変更する