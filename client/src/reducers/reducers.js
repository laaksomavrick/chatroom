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
*/

/*
*
*  App's data store shape
*
 {
    messages: [
        {
            id: Int
            message: String
        }
    ]
 }
 */

import { combineReducers } from 'redux' 
import { 
    ADD_MESSAGE 
} from '../actions/actions.js'

 // NEVER mutate the state, always create a copy with object.assign()
 // ALWAYS return the previous state for any unknown action
 // Note: as this becomes more verbose, ought to split up into separate handlers for related sets of actions
 //       which would require same data (reducer composition)
 //       http://redux.js.org/docs/basics/Reducers.html
const messages = (state = [], action) => {
    switch(action.type) {
       case ADD_MESSAGE:
       return [
            ...state,
            {
                message: action.message            
            }
       ]
       default:
           return state
    }
}

// each item here should manages one branch in the state tree
export const chatApp = combineReducers({
    messages
})
