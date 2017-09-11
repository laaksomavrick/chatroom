import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal }  from 'react-bootstrap'

class AuthStateButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }

    open() {
        this.setState({ showModal: true })
    }

    close() {
        this.setState({ showModal: false })
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
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h4>Text in a modal</h4>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )

    }

}

AuthStateButton = connect()(AuthStateButton)

export default AuthStateButton