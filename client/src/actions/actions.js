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
 * action creators
 */

export const REQUEST_MESSAGES = 'REQUEST_MESSAGES'
export const requestMessages = () => {
    return {
      type: REQUEST_MESSAGES
    }
}

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const receiveMessages = (json) => {
    return {
        type: RECEIVE_MESSAGES,
        messages: json.messages
    }
}

export const fetchMessages = () => {
    return function (dispatch) {
        dispatch(requestMessages())
        return fetch('/api/v1/chat')
            .then(
                response => response.json(),
                error => console.log('An error occured.', error)
            )
            .then(
                json => dispatch(receiveMessages(json))
            )
    }

}

export const ADD_MESSAGE = 'ADD_MESSAGE';  
export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message
    }
}

