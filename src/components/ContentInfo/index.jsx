import React from 'react'
import { Container, Inner } from './styles.js'
import { motion } from 'framer-motion'
import Description from '../ProductScreen/Description/Description'
import Especifications from '../ProductScreen/Especifications/Especifications'

const ContentInfo = ({ description, especifications }) => {
    return (
        <Container as={motion.div} className="content-info tw-h-full tw-relative tw-overflow-auto "
            initial={{
                opacity: 0,
            }}

            animate={{

                opacity: 1,

            }}

            transition={{
                duration: 1
            }}

        >
                <Inner
                    className="tw-h-full tw-absolute tw-w-full  tw-overflow-auto   tw-top-0  tw-p-10 tw-pt-36">
                    <Especifications data={especifications} />
                </Inner>
        </Container>
    )
}



export default ContentInfo
