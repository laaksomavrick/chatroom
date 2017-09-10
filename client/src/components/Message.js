import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ username, message }) => (
    <li className="message">
        {username}: {message}
    </li>
)

Message.PropTypes = {
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

export default Message