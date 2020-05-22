import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator } from '../modules';
import Login from '../components/Login';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        //20200516
        onSubmit: (payload: any) => {
            dispatch(actionCreator.login.sendLogin(payload));
            console.log(payload);
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);