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

    // componentDidUpdate(prevProps) {

    // }

    render() {
        const { chatroom } = this.props
        return (
            <MessageList chatroom={chatroom}/>            
        )
    }

}


/*
 *  mapStateToProps describes how to transform the current Redux store state 
 *  into the props you want to pass to the presentational component being wrapped
 */
const mapStateToProps = state => { //will have to change to the current selected room
    return state
}

export default connect(mapStateToProps)(ChatroomContainer)
