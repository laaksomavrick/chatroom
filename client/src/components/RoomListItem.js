import React from 'react'
import PropTypes from 'prop-types'

const RoomListItem = ({ name }) => (
    <li>
        {name}
    </li>
)

RoomListItem.PropTypes = {
    name: PropTypes.string.isRequired,
}

export default RoomListItem