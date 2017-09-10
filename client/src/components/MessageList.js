import React from 'react'
import Message from './Message'
import Loading from './Loading'

export const MessageList = ({ selectedChatRoom }) => (

    <div className="messageContainer">
        <h1>{selectedChatRoom.name}</h1>
        <div className="messageListContainer">
            <ul className="messageList">
                { 
                    selectedChatRoom.messages.map((data, index) => (
                        <Message key={index} username={data.username} message={data.message}/>
                    ))
                }
            </ul>
        </div>
    </div>
)