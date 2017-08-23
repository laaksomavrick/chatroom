/*
*
*   actions.js
*
*   Actions are payloads of information that send data from your application to your 
*   store. They are the only source of information 
*   for the store.
*
*/

/*
 * action types
 */

const ADD_MESSAGE = 'ADD_MESSAGE';

export const Actions = {
    ADD_MESSAGE: ADD_MESSAGE
}

/*
 * action creators
 */

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message
    }
}