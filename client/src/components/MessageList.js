import React, { Component } from 'react'
import Message from './Message'
import Loading from './Loading'

export default class MessageList extends Component {

    constructor(props) {
        super(props)
        this.scrollToBottom = this.scrollToBottom.bind(this)
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    scrollToBottom(){
        this.messagesEnd.scrollIntoView({ behavior: 'smooth' })
    }
    
    render() {
        const { selectedChatRoom } = this.props
        return (
            <div className="messageContainer">
                <h1 style={{'padding-left': '10px'}}>{selectedChatRoom.name}</h1>
                <div className="messageListContainer">
                    <ul className="messageList">
                        { 
                            selectedChatRoom.messages.map((data, index) => (
                                <Message key={index} username={data.username} message={data.message}/>
                            ))
                        }
                    </ul>
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el }}>
                    </div>
                </div>
            </div>
        )

    }

}