import React from 'react'
import AddMessage from '../containers/AddMessage'
import ChatroomContainer from '../containers/ChatroomContainer'
import RoomListContainer from '../containers/RoomListContainer'

export const App = () => (
    <div className="container">
        <RoomListContainer />
        <div className="chatContainer">
            <ChatroomContainer />
            <AddMessage />
        </div>
    </div>
)
