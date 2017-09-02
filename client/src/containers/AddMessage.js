import React from 'react'
import { connect } from 'react-redux'
import { localSendMessage, serverSendMessage } from '../actions/actions'

let AddMessage = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(localSendMessage(input.value))
          dispatch(serverSendMessage(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
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