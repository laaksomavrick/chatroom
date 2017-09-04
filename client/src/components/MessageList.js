import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import Loading from './Loading'

export const MessageList = ({ chatroom }) => (
    <div>
        <h1>{chatroom.name}</h1>
        <Loading isFetching={chatroom.isFetching}/>
        <ul>
            { chatroom.messages.map((data, index) => (
                <Message key={index} username={data.username} message={data.message}/>
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