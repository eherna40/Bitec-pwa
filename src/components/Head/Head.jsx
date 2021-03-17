import React from 'react'
import Logo from '../Logo/Logo'
import { Container, Content } from './style'

const Head = () => {
    return (
        <Container className="Head tw-bg-primary tw-fixed tw-w-full tw-flex tw-items-center tw-top-0 tw-left-0" >
            <Content className="tw-ml-20">
                <Logo mode='dark' />
            </Content>
        </Container>
    )
}

export default Head
