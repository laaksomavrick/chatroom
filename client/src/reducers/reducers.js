/*
*
*   reducers.js
*
*   Reducers specify how the application's state changes in response to actions
*   The reducer is a pure function that takes the previous state and an action, 
*   and returns the next state.
*
*   (previousState, action) => newState
*
*
*/

import { combineReducers } from 'redux' 
import { 
    NEW_MESSAGE,
    REQUEST_GET_MESSAGES,
    RESPONSE_GET_MESSAGES,
    REQUEST_GET_ROOMS,
    RESPONSE_GET_ROOMS
} from '../actions/actions.js'

/**
 * 
 * {
 *  selectedChatRoom: chatroom,
 *  roomList: roomList
 *
 * }
 * 
 */

const roomList = (
    state = {
        isFetching: false,
        rooms: []
    }, 
    action
) => {
    switch(action.type) {
        case REQUEST_GET_ROOMS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RESPONSE_GET_ROOMS:
            return Object.assign({}, state, {
                isFetching: false,
                rooms: action.payload.rooms
            })
        default:
            return state
    }
}
 
const selectedChatRoom = (
    state = {
        id: 1,
        name: "Welcome Lobby",
        isFetching: false,
        messages: []
    }, 
    action
) => {
    switch(action.type) {
        case REQUEST_GET_MESSAGES:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case RESPONSE_GET_MESSAGES:
            return Object.assign({}, state, {
                id: action.payload.room.id,
                name: action.payload.room.name,
                isFetching: false,
                messages: action.payload.room.messages,
            })
        case NEW_MESSAGE:
            return Object.assign({}, state, {
                ...state,
                messages: [...state.messages, action.payload]
            })
       default:
           return state
    }
}

const user = (
    state = {
        username: 'Anonymous',
        authenticated: false
    }, 
    action
) => {
    switch(action.type) {
        default:
            return state
    }
}

// each item here should manages one branch in the state tree
export const rootReducer = combineReducers({
    selectedChatRoom,
    roomList,
    user
})
