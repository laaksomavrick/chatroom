import React from 'react'
import Message from './Message'
import Loading from './Loading'

export const MessageList = ({ selectedChatRoom }) => {
    
    return (
        <div className="messageContainer">
            <h1 style={{'padding-left': '10px'}}>{selectedChatRoom.name}</h1>
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

}