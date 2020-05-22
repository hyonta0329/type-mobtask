import * as React from 'react';
import AddTodo from '../containers/AddTodo';
import Login from '../containers/LoginContainer';
//import VisibleTodoList from './VisibleTodoList';
//import Footer from './Footer';
import ShowMorningTodoList from '../containers/ShowMorningTodoList';
import PutTicketContainer from '../containers/PutTicketContainer';
import PutTicketContainerAdHoc from '../containers/PutTicketContainerAdHoc'
import Home from './Home';

const component: React.SFC = () => {
    return (
        <div>
            <Login />
            <Home />
            <PutTicketContainer />
            <PutTicketContainerAdHoc />
        </div>
    );
};
//            <ShowMorningTodoList />

export default component;