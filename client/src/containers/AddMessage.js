import React from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { localSendMessage, serverSendMessage } from '../actions/actions'

let AddMessage = ({ dispatch }) => {

    let message

    return (
        <div className="addMessage">
            <Form
                style={{'width': '100%'}}
                onSubmit={e => {

                    e.preventDefault()

                    if (!message.value.trim()) {
                        return
                    }

                    dispatch(localSendMessage(message.value))
                    dispatch(serverSendMessage(message.value))

                    message.value = ''

                }}
            >
                <FormControl
                    style={{'width': '100%', 'height': '64px', 'margin-top': '5px'}} 
                    type="text"
                    placeholder="Add a message!"
                    inputRef={node => {
                        message = node
                    }}
                />
            </Form>
        </div>
    )
}

AddMessage = connect()(AddMessage)

export default AddMessage