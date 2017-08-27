import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { rootReducer } from './reducers/reducers'
import { App } from './components/App'
import { fetchMessages } from './actions/actions'

const loggerMiddleware = createLogger()
const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // logger
    )
)


store
  .dispatch(fetchMessages())
  .then(() => console.log(store.getState()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

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
 * 
    //redux, component split up, websockets for messages, users, auth, rooms
 * 
 */
