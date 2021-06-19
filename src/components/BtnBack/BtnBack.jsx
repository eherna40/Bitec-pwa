import { motion } from 'framer-motion'
import React from 'react'
import { useHistory } from 'react-router-dom'
import IcBack from '../Icons/IcBack'
import { Container } from './style'

export const BtnBack = () => {
    const history = useHistory()
    return (
        <Container
            as={motion.div}
            initial={{
                left: -70
            }}
            animate={{
                left: 0
            }}
            exit={{
                left: -70,
            }}
            transition={{
                duration: .3,
                delay: .5,
            }}
            onClick={() => history.goBack()} className="BtnBack tw-fixed tw-rounded-r-full tw-py-2 tw-pl-6 tw-pr-10 tw-border  tw-bg-white ">
            <IcBack color='#333' size={20} />
        </Container>
    )
}
