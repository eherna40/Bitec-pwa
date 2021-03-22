import React from 'react'
import { Container, Content } from './styles'
import Logo from '../../Logo/Logo'
import { motion } from 'framer-motion'


const LateralBar = () => {
    return (
        <Container
        as={motion.div}
            initial={{ left: -65 }}
            animate={{ left: 0 }}
            exit={{ left: -65 }}
            className="tw-bg-white tw-fixed tw-h-screen tw-py-4 tw-z-50 tw-top-0">
            <Content className="tw-py-6">
                <Logo />
            </Content>
        </Container>
    )
}



export default LateralBar
