import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal }  from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { serverAddRoom } from '../actions/actions.js'

class AddRoomButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            roomName: ''
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.submit = this.submit.bind(this)
        this.getValidationState = this.getValidationState.bind(this) 
        this.handleChange = this.handleChange.bind(this)                
    }

    open() {
        this.setState({ showModal: true })
    }

    close() {
        this.setState({ showModal: false })
    }

    submit() {
        const { dispatch } = this.props
        const roomName = this.state.roomName
        if (roomName.length <= 0) { return }
        dispatch(serverAddRoom(roomName))
        this.close()
    }

    getValidationState() {
        const length = this.state.roomName.length
        if (length > 0) return 'success'
        else return 'error'
    }

    handleChange(e) {
        this.setState({ roomName: e.target.value });
    }

    render() {

        return (
            <div>
                <Button
                    style={{'height': '5vh', 'margin': '7.5px', 'width': '22.5vh'}}
                    bsStyle="success" 
                    onClick={this.open}>
                    Add Room
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>

                    <Modal.Header closeButton>
                        <Modal.Title>Add Room</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                            >
                                <FormControl
                                    type="text"
                                    value={this.state.roomName}
                                    placeholder="Enter a name for the room"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.submit}>Submit</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )

    }

}

AddRoomButton = connect()(AddRoomButton)

export default AddRoomButton