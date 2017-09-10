import React from 'react'
import RoomListItem from './RoomListItem'
import Loading from './Loading'

export const RoomList = ({ roomList }) =>  {
    
    return (
        <div className="roomListContainer">
            <Loading isFetching={roomList.isFetching}/>
            <ul className="roomList">
                {
                    roomList.rooms.map((data, index) => (
                        <RoomListItem key={index} name={data.name} onClick={() => roomList.onRoomListItemClick(data.id)}/>
                    ))
                }
            </ul>
        </div>
    )

}