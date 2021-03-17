import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './styles'

const IcPlay = ({color, size}) => {
    return (
        <Icon  size={size} color={color} className="material-icons">
            play_arrow
        </Icon>
    )
}

IcPlay.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string
}

IcPlay.defaultProps = {
    size: 20,
    color: '#333'
}

export default IcPlay
