import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from "redux";
import criteria from "./reducers/criteria";

const reducers = combineReducers( { criteria } );
const store = createStore(

    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
store.subscribe( () =>

    ReactDOM.render(<App data={store.getState()} dispatch={store.dispatch} />, document.getElementById('root'))

);
store.dispatch( { type: "init" } );
registerServiceWorker();
