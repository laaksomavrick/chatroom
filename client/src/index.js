import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { chatApp } from './reducers/reducers.js';
import { addMessage } from './actions/actions.js'

let store = createStore(chatApp)

console.log(store.getState())
store.dispatch(addMessage('testing redux!'))
console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/**
 * 
 * Basic flow for redux
 * 
 * 1. store.dispatch(action), action being POJO describing what happened
 * 2. redux store calls reducer for the action
 * 3. root reducer combines output of multiple reducers into single state tree
 * 4. redux store saves the complete state tree returned by the root reducer
 * 
 *   http://redux.js.org/docs/basics/DataFlow.html
 * 
 */
