import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RoomList } from '../components/RoomList'
import { getRoomListData } from '../actions/actions'

class RoomListContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getRoomListData())        
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

export default connect(mapStateToProps)(RoomListContainer)