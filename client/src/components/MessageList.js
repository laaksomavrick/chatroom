import React from 'react'
import Message from './Message'
import Loading from './Loading'

export const MessageList = ({ selectedChatRoom }) => (

    <div className="messageList">
        <h1>{selectedChatRoom.name}</h1>
        <Loading isFetching={selectedChatRoom.isFetching}/>
        <ul>
            { 
                selectedChatRoom.messages.map((data, index) => (
                    <Message key={index} username={data.username} message={data.message}/>
                ))
            }
        </ul>
    </div>
)