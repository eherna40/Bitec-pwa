import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../Paragraphs/Paragraphs'
import { Container, Line } from './styles'

const Reference = ({ reference,
    absolute,
    textAlign,
    EAN
}) => {
    return (
        <Container absolute={absolute}>
            <div className="line tw-flex tw-items-end">
                <Line className="tw-bg-black-800 tw-relative" />
                <Paragraphs uppercase size={'xs'} family='bold' className={`tw-text-${textAlign} tw-text-black-800`}>
                    Referencia
            </Paragraphs>
            </div>
            <Paragraphs family='extrabold' size='2xl' className={`tw-text-${textAlign} tw-opacity-10`}>
                {reference}
            </Paragraphs>
            <Paragraphs size={'xs'} family='medium' className={`tw-text-black-800`}>
                {EAN}
            </Paragraphs>
        </Container>
    )
}

Reference.propTypes = {
    reference: PropTypes.string,
    absolute: PropTypes.bool,
    textAlign: PropTypes.oneOf(['center', 'right', 'left']),
    EAN: PropTypes.string
}


Reference.defaultProps = {
    reference: '',
    absolute: PropTypes.bool,
    textAlign: PropTypes.oneOf(['center', 'right', 'left']),
    EAN: ''
}

export default Reference
