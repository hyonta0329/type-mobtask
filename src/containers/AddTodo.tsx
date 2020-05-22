import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator } from '../modules';
import AddTodo from '../components/AddTodo';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        //20200516
        onSubmit: (payload: any) => {
            dispatch(actionCreator.todos.addTodo(payload));
            console.log(payload);
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);