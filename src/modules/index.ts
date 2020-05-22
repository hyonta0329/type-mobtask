import { combineReducers } from 'redux';
import * as Todos from './todos';
import * as Login from './Login';
import * as VisibilityFilter from './visibilityFilter'

export type RootState = {
    todos: Todos.State;
    login: Login.State;
    //visibilityFilter: VisibilityFilter.State;
};

export const actionCreator = {
    todos: Todos.actionCreator,
    login: Login.actionCreator,
    //visibilityFilter: VisibilityFilter.actionCreator,
};

export const rootReducer = combineReducers({
    todos: Todos.reducer,
    login: Login.reducer,
    //visibilityFilter: VisibilityFilter.reducer,
});