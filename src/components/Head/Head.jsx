import { motion } from 'framer-motion'
import React from 'react'
import Logo from '../Logo/Logo'
import { Container, Content } from './style'

const Head = () => {
    return (
        <Container as={motion.div} 
        initial={{
            opacity: 0,
            left: 10
        }}
            animate={{
                opacity: 1,
                left: 40
            }}
            exit={{
                opacity: 0,

            }}
            transition={{
                duration: .5
            }}
            className="Head tw-bg-black-900 tw-fixed  tw-flex tw-items-center" >
            <Content className="tw-flex tw-items-center tw-justify-center">
                <Logo mode='light'  size={'small'}/>
            </Content>
        </Container>
    )
}

export default Head
