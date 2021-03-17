import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../Paragraphs/Paragraphs'
import { Container } from './styles'

const FloatInfo = ({name, description_short}) => {
    return (
        <Container className="tw-absolute tw-z-50 tw-text-white tw-w-6/12 tw-p-4	tw-top-10 tw-left-10">
            <Paragraphs className="tw-text-white tw-mb-2" italic family='bold' size={'3xl'}>{name}</Paragraphs>
            <Paragraphs className="tw-text-white" italic size={'sm'}>{description_short}</Paragraphs>
        </Container>
    )
}

FloatInfo.propTypes = {
    name: PropTypes.string,
    description_short: PropTypes.string
}

export default FloatInfo
