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

 import { Actions } from '../actions/actions.js'

 const initialState = {
     messages: []
 }

 // NEVER mutate the state, always create a copy with object.assign()
 // ALWAYS return the previous state for any unknown action
 // Note: as this becomes more verbose, ought to split up into separate handlers for related sets of actions
 //       which would require same data (reducer composition)
 //       http://redux.js.org/docs/basics/Reducers.html
 export const chatApp = (state = initialState, action) => {
     switch(action.type) {
        case Actions.ADD_MESSAGE:
        return Object.assign({}, state, {
            messages: [
              ...state.messages,
              {
                message: action.message
              }
            ]
          })
        default:
            return state
     }
 }