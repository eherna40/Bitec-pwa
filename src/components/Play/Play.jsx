import React from 'react'
import PropTypes from 'prop-types'
import IcPlay from '../Icons/IcPlay'
import { Container } from './styles'

const Play = () => {
    return (
        <Container className="Play tw-border-2 tw-border-white tw-shadow-2xl tw-rounded-full tw-bg-primary tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center">
            <IcPlay color='white' size={'40'} />
        </Container>
    )
}

export default Play
