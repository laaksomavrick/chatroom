import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { chatApp } from './reducers/reducers'
import { App } from './components/App'

import { addMessage } from './actions/actions'

let store = createStore(chatApp)

store.dispatch(addMessage('Learn about actions'))
store.dispatch(addMessage('Learn about reducers'))
store.dispatch(addMessage('Learn about store'))

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

  componentDidMount() {
      //todo: create abstraction for checking status codes + returning result in std fmt
    fetch('/api/v1/chat')
     .then(res => { return res.json() } )
     .then(json => { 
            if (json.messages) { 
                this.setState( {messages: json.messages} )
            }
        })

  }
 * 
 */
