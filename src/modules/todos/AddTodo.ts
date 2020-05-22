import {Action} from 'redux';

export type AddTodoPayload = {
    Comment: string;
    Due: string;
    //Comment: string;
    //20200516
    title: string;
    TaskStatus: string;
};

export interface AddTodoAction extends Action {
    type: 'ADD_TODO';
    payload: AddTodoPayload;
}

export const addTodo = (payload: AddTodoPayload): AddTodoAction => {
    return {
        payload,
        type: 'ADD_TODO'
    };
};