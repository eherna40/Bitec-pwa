import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content } from './styles'
import Logo from '../../Logo/Logo'
const LateralBar = props => {
    return (
        <Container className="tw-bg-white tw-fixed tw-h-screen tw-py-4 tw-z-50 tw-top-0 tw-left-0">
            <Content className="tw-py-6">
                <Logo />
            </Content>
        </Container>
    )
}

LateralBar.propTypes = {

}

export default LateralBar
