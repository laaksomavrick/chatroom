import React from 'react'
import PropTypes from 'prop-types'

const RoomListItem = ({ name, onClick }) => (
    <li onClick={onClick}>
        {name}
    </li>
)

RoomListItem.PropTypes = {
    name: PropTypes.string.isRequired,
}

export default RoomListItem