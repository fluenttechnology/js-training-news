import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import criteria from "./reducers/criteria";
import articles from "./reducers/articles";

const reducers = combineReducers( { criteria, articles } );
const store = createStore(

    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
ReactDOM.render(

    <Provider store={store}><App /></Provider>,
    document.getElementById('root')

);
registerServiceWorker();
