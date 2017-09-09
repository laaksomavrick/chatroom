import React from 'react'
import RoomListItem from './RoomListItem'

export const RoomList = ({ rooms }) => (
    <div className="roomList">
        <ul>
            {
                rooms.map((data, index) => (
                    <RoomListItem key={index} name={data.name}/>
                ))
            }
        </ul>
    </div>
)