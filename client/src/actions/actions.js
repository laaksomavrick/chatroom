/**
*
*   actions.js
*
*   Actions are payloads of information that send data from your application to your 
*   store. They are the only source of information 
*   for the store.
*   Note to self: think of actions as "emitted events"
*
*/

/*
 * action creators
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

//update local state first
//send message to server
//on complete, broadcast to the rest of clients to update

    //update local state step + on complete step => same action, affect state the same way


export const NEW_MESSAGE = 'NEW_MESSAGE'

export const sendMessage = (text) => {
    return dispatch => {
        dispatch(localSendMessage)
        dispatch(serverSendMessage)
    }
}

export const localSendMessage = (text) => {
    return {
        type: NEW_MESSAGE, //todo move to common
        payload: {message_text: text}
    }
}

export const serverSendMessage = (text) => {
    return {
        type: `server/${NEW_MESSAGE}`, //todo move to common
        payload: {message_text: text}
    }
}

// export const sendMessage = (text) => {

//     //todo need to abstract POST requests (utilities file?)

//     var myHeaders = new Headers();  
//     myHeaders.append('Content-Type', 'application/json');    

//     return function (dispatch) {
//         dispatch(requestPostMessage(text))
//         return fetch(
//             '/api/v1/chat',
//             {
//                 method: "POST",
//                 headers: myHeaders,
//                 mode: 'cors',
//                 cache: 'default',            
//                 body: JSON.stringify({
//                     text: text
//                 })
//             }
//         )
//             .then(
//                 response => response.json(),
//                 error => console.log('An error occured.', error) //todo handle error
//             )
//             .then(
//                 json => dispatch(receivePostMessage(json.message_text))
//             )
//             .then(
//                 dispatch(fetchMessages())
//             )
//     }
// }