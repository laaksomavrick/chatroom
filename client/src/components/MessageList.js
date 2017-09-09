import React from 'react'
import Message from './Message'
import Loading from './Loading'

export const MessageList = ({ chatroom }) => (
    <div className="messageList">
        <h1>{chatroom.name}</h1>
        <Loading isFetching={chatroom.isFetching}/>
        <ul>
            { 
                chatroom.messages.map((data, index) => (
                    <Message key={index} username={data.username} message={data.message}/>
                ))
            }
        </ul>
    </div>
)