import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

export const MessageList = ({ chatroom }) => (
    <ul>
        { chatroom.messages.map(message => (
            <Message key={message.id} id={message.id} message={message.message_text}/>
        ))}
    </ul>
)

MessageList.PropTypes = {
    isFetching: PropTypes.bool.isRequired,
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}