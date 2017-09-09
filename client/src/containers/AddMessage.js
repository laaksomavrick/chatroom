import React from 'react'
import { connect } from 'react-redux'
import { localSendMessage, serverSendMessage } from '../actions/actions'

let AddMessage = ({ dispatch }) => {

    let message
    let username

    return (
        <div className="addMessage">
            <form
                onSubmit={e => {

                    e.preventDefault()

                    if (!message.value.trim()) {
                        return
                    }

                    if (!username.value.trim()) {
                        username = 'Anonymous'
                    }

                    dispatch(localSendMessage(username.value, message.value))
                    dispatch(serverSendMessage(username.value, message.value))

                    message.value = ''

                }}
            >

                <input
                    defaultValue="Anonymous"
                    ref={node => {
                        username = node
                    }}
                    />
                <input
                    ref={node => {
                        message = node
                    }}
                />
                <button type="submit">
                    Send Message
                </button>
            </form>
        </div>
    )
}

AddMessage = connect()(AddMessage)

export default AddMessage