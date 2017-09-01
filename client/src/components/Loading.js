import React from 'react'
import PropTypes from 'prop-types'

const Loading = ({ isFetching }) => {
    if (isFetching) {
        return <span>Loading...</span>
    } else {
        return null
    }
}

Loading.PropTypes = {
    isFetching: PropTypes.bool.isRequired
}

export default Loading