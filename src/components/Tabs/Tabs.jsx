import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Box, Container } from './styles'
import Paragraphs from '../Paragraphs/Paragraphs'
import { motion } from 'framer-motion'

const Tabs = ({ categories, onPress }) => {
    return (
        <Container className="Tabs tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-h-full tw-w-full">
                {
                    categories.map((i, idx) => {
                        return <Box as={motion.div} onClick={() => onPress(i)} className="tw-relative tw-text-primary  tw-cursor-pointer tw-flex align-items-center tw-justify-center">
                            <motion.div
                            initial={{
                                opacity: 0,
                                x: -10
                            }}
                            animate={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: .4,
                                delay:(idx * 0.3)
                            }}
                            >
                            <Paragraphs size='xl' family='universe' uppercase>{i.name}</Paragraphs>

                            </motion.div>
                                
                         
                        </Box>
                    })
                }
        </Container>
    )
}

Tabs.propTypes = {
    categories: PropTypes.array,
    onPress: PropTypes.func
}

Tabs.defaultProps = {
    categories: []
}

export default Tabs
