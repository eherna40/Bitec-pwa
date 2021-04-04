import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../Paragraphs/Paragraphs'
import { Container } from './styles'

const Reference = ({ reference,
    absolute,
    textAlign,
    ean13
}) => {
    return (
        <Container absolute={absolute}>
            <div className="line tw-flex tw-items-end">
                <Paragraphs uppercase size={'xs'} family='bold' className={`tw-text-${textAlign} tw-text-black-800`}>
                    Ref. LM:  {ean13}
            </Paragraphs>
            </div>
            <Paragraphs family='extrabold' size='2xl' className={`tw-text-${textAlign} tw-opacity-10`}>
             {reference}
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
