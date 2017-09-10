import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MessageList } from '../components/MessageList'
import { getRoomData, subscribeToRoom } from '../actions/actions'


class ChatroomContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(subscribeToRoom())
        dispatch(getRoomData())
    }

    render() {
        const { selectedChatRoom } = this.props
        return (
            <MessageList selectedChatRoom={selectedChatRoom}/>
        )
    }

}

const mapStateToProps = state => {
    return {
        selectedChatRoom: state.selectedChatRoom
    }
}

export default connect(mapStateToProps)(ChatroomContainer)
