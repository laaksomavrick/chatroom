import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

export const MessageList = ({ messages }) => (
    <ul>
        { messages.map(message => (
            <Message key={message.id} {...message} />
        ))}
    </ul>
)

MessageList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}