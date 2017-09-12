import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RoomList } from '../components/RoomList'
import AuthStateButton from '../containers/AuthStateButton'
import AddRoomButton from '../containers/AddRoomButton'
import { getRoomListData, getRoomData, subscribeToRoom } from '../actions/actions'

class RoomListContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { onLoad } = this.props
        onLoad()     
    }

    render() {
        const roomList = this.props.roomList
        const onRoomListItemClick = this.props.onRoomListItemClick
        const user = this.props.user
        return (
            <div className="roomListContainer">
                <RoomList roomList={roomList} onRoomListItemClick={onRoomListItemClick}/>
                <AddRoomButton/>
                <AuthStateButton user={user}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        roomList: state.roomList,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRoomListItemClick: id => {
            dispatch(subscribeToRoom(id))
            dispatch(getRoomData(id))
        },
        onLoad: () => {
            dispatch(getRoomListData())
        }
    }
}

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connector(RoomListContainer)