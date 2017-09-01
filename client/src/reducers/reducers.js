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
*   Note to self: think of reducers as handlers for events
*
*/

/*
*
*  App's data store shape
*
 {
    isFetching: bool,
    isSending: bool,
    messages: [
        {
            id: Int
            message_text: String
        }
    ]
 }
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
        isFetching: false,
        isSending: false,
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
                isFetching: false,
                messages: action.messages,
            })
        case NEW_MESSAGE:
            return Object.assign({}, state, {
                ...state,
                isSending: false,
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
