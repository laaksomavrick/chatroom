import React from 'react'
import RoomListItem from './RoomListItem'
import Loading from './Loading'

export const RoomList = ({ roomList, onRoomListItemClick }) =>  (
        <ul className="roomList">
            {
                roomList.rooms.map((data, index) => (
                    <RoomListItem key={index} name={data.name} onClick={() => onRoomListItemClick(data.id)}/>
                ))
            }
        </ul>
)

