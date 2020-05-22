//import { addTodo, AddTodoAction } from './AddTodo';
import { sendLogin, SendLoginAction } from './Login';

type Actions
    = SendLoginAction;
    

export type State = {    // ページ全体で保持しとくべき情報はTodoの配列くらい
    todos: {
        id: number;      // 連番を振っておく
        text: string;
        completed: boolean;
    }[];
    login: {
        username: string;
        password: string;
    }[];
};

const init = (): State => {
    return {
        todos: [],
        login: [],
    };
};

export const reducer = (state: State = init(), action: Actions) => {
    switch (action.type) {
    case 'SEND_LOGIN':
        return {
            login: [
                {
                username: action.payload.username,
                password: action.payload.pas,
            }]
        }
    default:
        return state;
    }
};

export const actionCreator = {
    sendLogin,
};