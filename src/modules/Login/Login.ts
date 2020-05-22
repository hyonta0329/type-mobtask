import {Action} from 'redux';


//SendLogin
export type LoginPayload = {
    username: string;
    pas: string;
};
export interface SendLoginAction extends Action {
    type: 'SEND_LOGIN',
    payload: LoginPayload,
}
export const sendLogin = (payload: LoginPayload) => {
    return {
        payload,
        type: 'SEND_LOGIN',
    }
}
