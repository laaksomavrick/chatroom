import React from 'react'
import AddMessage from '../containers/AddMessage'
import MessageContainer from '../containers/MessageContainer'

export const App = () => (
  <div>
    <MessageContainer />
    <AddMessage />
  </div>
)
