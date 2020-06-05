import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { actionCreator, RootState } from '../modules';
import EditTicketComponentAdHoc from '../components/EditTicketComponentAdHoc';

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
        onSubmit: (TaskID: string, type: string, title: string, Comment: string, Due: string, timezone: string) => {
            dispatch(actionCreator.todos.editTicket(TaskID, type, title, Comment, Due, timezone));
            console.log(TaskID+type+title);
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTicketComponentAdHoc);
//ここもSetTicketで変更する