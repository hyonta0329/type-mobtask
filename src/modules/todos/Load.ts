import {Action} from 'redux';


//SendLogin
/*export type LoginPayload = {
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
*/

//SetToken?

//SetTicket
//export type TicketPayload = {
    //Comment: string;
    //Due: string;
    //title: string;
    //TaskStatus: string;
//};
export interface SetTicketAction extends Action {
    type: 'SET_TICKET',
    payload: any,
    token: string,
}
export const setTicket = (payload: any, token: string) => {
    return {
        payload, 
        token,
        type: 'SET_TICKET',
    }
}

export const putTicket = (payload: any, token: string) => {
    return {
        payload,
        token,
        type: 'PUT_TICKET',
    }
}

export const transitionOrDeleteTicket = (TaskID: string, type: string, TaskStatus: string) => {
    return {
        payload: {
            TaskID : TaskID,
            OperationType : type,
            TaskStatus : TaskStatus
        },
        type: 'TRANSITION_OR_DELETE_TICKET'
    }
}