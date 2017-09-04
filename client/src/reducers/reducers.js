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
    RESPONSE_GET_MESSAGES
} from '../actions/actions.js'

 // NEVER mutate the state, always create a copy with object.assign()
 // ALWAYS return the previous state for any unknown action
 // Note: as this becomes more verbose, ought to split up into separate handlers for related sets of actions
 //       which would require same data (reducer composition)
 //       http://redux.js.org/docs/basics/Reducers.html
 
const chatroom = (
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

// each item here should manages one branch in the state tree
export const rootReducer = combineReducers({
    chatroom
})
