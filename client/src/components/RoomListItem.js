import React from 'react'
import PropTypes from 'prop-types'

const RoomListItem = ({ name, onClick }) => (
    <li className="room" onClick={onClick}>
        {name}
    </li>
)

RoomListItem.PropTypes = {
    name: PropTypes.string.isRequired,
}

export default RoomListItem