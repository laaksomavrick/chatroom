import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal }  from 'react-bootstrap'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { newUsername } from '../actions/actions.js'

class AuthStateButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            username: ''
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
        const username = this.state.username
        if (username.length <= 0) { return }
        dispatch(newUsername(username))
        this.close()
    }

    getValidationState() {
        const length = this.state.username.length
        if (length > 0) return 'success'
        else return 'error'
    }

    handleChange(e) {
        this.setState({ username: e.target.value });
    }

    render() {

        const { user } = this.props

        return (
            <div>
                <Button
                    style={{'height': '5vh', 'margin': '7.5px', 'width': '22.5vh'}}
                    bsStyle="primary" 
                    onClick={this.open}>
                    {user.username}
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>

                    <Modal.Header closeButton>
                        <Modal.Title>Change Username</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                            >
                                <FormControl
                                    type="text"
                                    value={this.state.username}
                                    placeholder={user.username}
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

AuthStateButton = connect()(AuthStateButton)

export default AuthStateButton