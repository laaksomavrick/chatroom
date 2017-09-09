import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RoomList } from '../components/RoomList'

class RoomListContainer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
    }

    render() {
        const temp = [
            {name: "test room 1"},
            {name: "test room 2"},
            {name: "test room 3"}
        ]
        return (
            <RoomList rooms={temp}/>
        )
    }

}

export default RoomListContainer