import React from 'react'
import RoomListItem from './RoomListItem'
import Loading from './Loading'

export const RoomList = ({ roomList }) =>  {

    console.log("here")
    console.log(roomList)
    
    return (
        <div className="roomList">
            <Loading isFetching={roomList.isFetching}/>
            <ul>
                {
                    roomList.rooms.map((data, index) => (
                        <RoomListItem key={index} name={data.name} onClick={() => roomList.onRoomListItemClick(data.id)}/>
                    ))
                }
            </ul>
        </div>
    )

}