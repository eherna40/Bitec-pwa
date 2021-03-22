import { motion } from 'framer-motion'
import React from 'react'
import Logo from '../Logo/Logo'
import { Container, Content } from './style'

const Head = () => {
    return (
        <Container as={motion.div} initial={{
            opacity: 0
        }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0
            }}
            transition={{
                duration: 1
            }}
            className="Head tw-bg-black-900 tw-fixed tw-w-full tw-flex tw-items-center tw-top-0 tw-left-0" >
            <Content className="tw-ml-20">
                <Logo mode='light' />
            </Content>
        </Container>
    )
}

export default Head
