import { socket } from '../index'

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
export const requestMessages = () => {
    return {
      type: REQUEST_GET_MESSAGES
    }
}

export const RECEIVE_GET_MESSAGES = 'RECEIVE_GET_MESSAGES'
export const receiveMessages = (json) => {
    return {
        type: RECEIVE_GET_MESSAGES,
        messages: json.messages
    }
}

export const fetchMessages = () => {
    return function (dispatch) {
        dispatch(requestMessages())
        return fetch('/api/v1/chat')
            .then(
                response => response.json(),
                error => console.log('An error occured.', error) //todo handle error
            )
            .then(
                json => dispatch(receiveMessages(json))
            )
    }
}

let tempId = 0
export const REQUEST_POST_MESSAGE = 'REQUEST_POST_MESSAGE'
export const requestPostMessage = (message) => {
    return {
        type: REQUEST_POST_MESSAGE,
        id: tempId++,        
        message_text: message
    }
}

export const RECEIVE_POST_MESSAGE = 'RECEIVE_POST_MESSAGE'
export const receivePostMessage = (message) => {
    return {
        type: RECEIVE_POST_MESSAGE,
        message: message
    }
}

export const sendMessage = (text) => {
    return function (dispatch) {
        console.log("here")
        dispatch(requestPostMessage(text))
        socket.emit('send:message', text);
    }
}

export const listenForMessages = (message) => {

    return function (dispatch) {       
        
        console.log("listening for messages!")        

        socket.on('send:message', (data) => {

            console.log("message received!")

            dispatch(receivePostMessage(data))
        })
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