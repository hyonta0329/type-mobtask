import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { logger } from "./middleware"

import App from './components/App';
import ShowDoneBox from './containers/ShowDoneBox'
import { rootReducer } from './modules';
import { Provider } from 'react-redux';

import { BrowserRouter, Route, Link } from 'react-router-dom' 

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <div>
        <BrowserRouter>
            <Route exact path='/' component={App} />
            <Route exact path='/home' component={App} />
            <Route exact path='/index.html' component={App} />
            <Route path='/done' component={ShowDoneBox} />
        </BrowserRouter>  
        </div>
    </Provider>,
    document.getElementById('root'));