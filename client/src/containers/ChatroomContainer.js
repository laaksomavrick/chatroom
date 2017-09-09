import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MessageList } from '../components/MessageList'
import { getRoomData } from '../actions/actions'


class ChatroomContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getRoomData())
    }

    render() {
        const { selectedChatRoom } = this.props
        return (
            <MessageList selectedChatRoom={selectedChatRoom}/>            
        )
    }

}


/*
 *  mapStateToProps describes how to transform the current Redux store state 
 *  into the props you want to pass to the component being wrapped
 */
const mapStateToProps = state => { //will have to change to the current selected room
    return {
        selectedChatRoom: state.selectedChatRoom
    }
}

export default connect(mapStateToProps)(ChatroomContainer)
