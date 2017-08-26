import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ id, message }) => (
    <li>
        {id} {message}
    </li>
)

Message.PropTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
}

export default Message