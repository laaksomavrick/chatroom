import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RoomList } from '../components/RoomList'
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
        const roomList = this.props
        return (
            <RoomList roomList={roomList}/>
        )
    }

}

const mapStateToProps = state => {
    return state.roomList
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