import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RoomList } from '../components/RoomList'
import { getRoomListData, getRoomData } from '../actions/actions'

class RoomListContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { onLoad, onRoomListItemClick } = this.props
        onLoad()     
    }

    handleRoomSelection(id) {
        console.log("yep!")
        console.log(id)
    }

    render() {
        const roomList = this.props
        return (
            <RoomList roomList={roomList}/>
        )
    }

}

const mapStateToProps = state => { //will have to change to the current selected room
    return state.roomList
}

const mapDispatchToProps = dispatch => {
    return {
        onRoomListItemClick: id => {
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