import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styles'

const IcBack = ({ size, color }) => {
    return (
        <Icon className="material-icons" size={size} color={color}>
            keyboard_backspace
        </Icon>
    )
}

IcBack.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string
}

IcBack.defaultProps = {
    size: 20,
    color: '#333'
}

export default IcBack
