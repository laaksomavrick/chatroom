import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import Loading from './Loading'

export const MessageList = ({ chatroom }) => (
    <div>
        <Loading isFetching={chatroom.isFetching}/>
        <ul>
            { chatroom.messages.map((message, index) => (
                <Message key={index} id={message.id} message={message.message_text}/>
            ))}
        </ul>
    </div>
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