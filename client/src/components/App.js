import React from 'react'
import AddMessage from '../containers/AddMessage'
import ChatroomContainer from '../containers/ChatroomContainer'

export const App = () => (
  <div>
    <ChatroomContainer />
    <AddMessage />
  </div>
)
