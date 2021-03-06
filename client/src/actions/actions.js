/**
*
*   actions.js
*
*   Actions are payloads of information that send data from your application to your 
*   store. They are the only source of information 
*   for the store.
*
*/

import { store } from '../index'

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
        payload: json
    }
}

export const getRoomData = (room = 1) => {
    return dispatch => {
        dispatch(requestGetMessages())
        return fetch(`/api/v1/room/${room}`)
            .then(
                response => response.json(),
                error => console.log('An error occured.', error)
            )
            .then(
                json => dispatch(responseGetMessages(json))
            )
    }
}

export const NEW_ROOM = 'NEW_ROOM'
export const serverAddRoom = (roomName) => {
    
        const roomId = store.getState().selectedChatRoom.id
        
        return {
            type: `server/${NEW_ROOM}`,
            payload: {roomName}
        }
}

export const REQUEST_GET_ROOMS = 'REQUEST_GET_ROOMS'
export const requestGetRooms = () => {
    return {
        type: REQUEST_GET_ROOMS
    }
}

export const RESPONSE_GET_ROOMS = 'RESPONSE_GET_ROOMS'
export const responseGetRooms = (json) => {
    return {
        type: RESPONSE_GET_ROOMS,
        payload: json
    }
}

export const getRoomListData = () => {
    return dispatch => {
        dispatch(requestGetRooms())
        return fetch(`/api/v1/rooms`)
            .then(
                response => response.json(),
                error => console.log('An error occured.', error) //todo handle error
            )
            .then(
                json => dispatch(responseGetRooms(json))
            )
    }
}

export const NEW_MESSAGE = 'NEW_MESSAGE'
export const localSendMessage = (message) => {

    const username = store.getState().user.username
    
    return {
        type: NEW_MESSAGE,
        payload: {username, message}
    }
}
export const serverSendMessage = (message) => {

    const username = store.getState().user.username
    const roomId = store.getState().selectedChatRoom.id
    
    return {
        type: `server/${NEW_MESSAGE}`,
        payload: {username, message, roomId}
    }
}

export const SUBSCRIBE_TO_ROOM = 'SUBSCRIBE_TO_ROOM'
export const subscribeToRoom = (roomId = 1) => {
    return {
        type: `server/${SUBSCRIBE_TO_ROOM}`,
        payload: {roomId}
    }
}

export const NEW_USERNAME = 'NEW_USERNAME'
export const newUsername = (username) => {
    return {
        type: NEW_USERNAME,
        payload: {username}
    }
}

