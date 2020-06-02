import { addTodo, AddTodoAction } from './AddTodo';
import { editTicket, SetTicketAction, putTicket, transitionOrDeleteTicket } from './Load';
import { toggleTodo, ToggleTodoAction } from './ToggleTodo';

type Actions
    = AddTodoAction
    | ToggleTodoAction
    | SetTicketAction;
    

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
    case 'SET_TICKET':
        return {
            todos: action.payload,
            token: action.token,
        }
    case 'ADD_TODO':
        return {
            todos: [
                //...state.todos,
                {    // 既存の配列に新しいのを追加
                    id: state.todos.length,
                    Comment: action.payload.Comment,
                    Due: action.payload.Due,
                    completed: false,
                    //20200516
                    title: action.payload.title,
                    TaskStatus: action.payload.TaskStatus
                },
                ...state.login,
            ],
        };
    case 'TOGGLE_TODO':
        return {
            todos: state.todos.map((e) => {
                return e.id !== action.payload.id
                    ? e
                    : {    // 対象のidだけcompletedを反転
                        ...e,
                        completed: !e.completed,
                    };
            }),
        };
    default:
        return state;
    }
};

export const actionCreator = {
    addTodo,
    toggleTodo,
    //addingPutTicket
    putTicket,
    transitionOrDeleteTicket,
    editTicket,
};