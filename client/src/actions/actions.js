/**
*
*   actions.js
*
*   Actions are payloads of information that send data from your application to your 
*   store. They are the only source of information 
*   for the store.
*
*/

export const REQUEST_GET_MESSAGES = 'REQUEST_GET_MESSAGES'
export const requestGetMessages = () => {
    return {
      type: REQUEST_GET_MESSAGES
    }
}

export const RESPONSE_GET_MESSAGES = 'RESPONSE_GET_MESSAGES'
export const responseGetMessages = (json) => {
    return {
        type: RESPONSE_GET_MESSAGES,
        messages: json.messages
    }
}

export const fetchMessages = () => {
    return dispatch => {
        dispatch(requestGetMessages())
        return fetch('/api/v1/chat')
            .then(
                response => response.json(),
                error => console.log('An error occured.', error) //todo handle error
            )
            .then(
                json => dispatch(responseGetMessages(json))
            )
    }
}

export const NEW_MESSAGE = 'NEW_MESSAGE'
export const localSendMessage = (username, message) => {
    return {
        type: NEW_MESSAGE, //todo move to common
        payload: {username, message}
    }
}
export const serverSendMessage = (username, message) => {
    return {
        type: `server/${NEW_MESSAGE}`, //todo move to common
        payload: {username, message}
    }
}