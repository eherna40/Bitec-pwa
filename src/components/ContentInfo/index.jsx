import React from 'react'
import { Container, Inner } from './styles.js'
import { motion } from 'framer-motion'
import Description from '../ProductScreen/Description/Description'
import Especifications from '../ProductScreen/Especifications/Especifications'

const ContentInfo = ({ description, especifications }) => {
    return (
        <Container as={motion.div} className="content-info tw-relative tw-overflow-auto tw-py-10 "
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
            <div className="tw-relative tw-h-full">
                <Inner
                    as={motion.div}
                    initial={{
                        x: -10
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        duration: 1,
                        delay: .5
                    }}
                    className="tw-h-full tw-absolute tw-w-full  tw-overflow-auto   tw-top-0  tw-p-10">
                    <Description description={description} />
                    <Especifications data={especifications} />
                </Inner>
            </div>
        </Container>
    )
}



export default ContentInfo
