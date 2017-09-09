import './styles/App.css';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { rootReducer } from './reducers/reducers'
import { App } from './components/App'

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client'

/**
 * todo
 * auth
 * basic styling
 * clean up code (routing, standard models in common for app state + routing consts, remove todos)
 * expand events 
 *      (typing, 
 *       seen, 
 *       online/offline, 
 *       user joined, 
 *       nicknames, 
 *       private messaging, 
 *       message sent/saved)
 */

const socket = io('http://localhost:3001')
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/")

const loggerMiddleware = createLogger()

export const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware, // logger
      socketIoMiddleware // socket middleware
    )
)

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
)