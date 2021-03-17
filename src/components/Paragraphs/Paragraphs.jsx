import React from 'react'
import PropTypes from 'prop-types'
import { Text } from './styles'

const Paragraphs = ({ children, italic, size, uppercase, family, className }) => {
    return (
        <Text className={`Paragraphs ${className} tw-text-${size} ${italic ? 'tw-italic' : ''} ${uppercase && 'tw-uppercase'}`} family={family}>
            {children}
        </Text>
    )
}

Paragraphs.propTypes = {
    text: PropTypes.string,
    family: PropTypes.oneOf(['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', 'univers']),
    italic: PropTypes.bool,
    univers: PropTypes.bool,
    size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    className: PropTypes.string,
}

Paragraphs.defaultProps = {
    family: 'medium',
    className: ''
}

export default Paragraphs
