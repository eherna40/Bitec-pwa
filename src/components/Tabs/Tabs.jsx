import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, ContentBox } from './styles'
import Paragraphs from '../Paragraphs/Paragraphs'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router'

const Tabs = ({ categories }) => {
    const history = useHistory()
    const handleClick = (item)=> {
        history.push('/listing',{
            data: item
        })
    }

    return (
        <Container className="Tabs tw-flex tw-flex-wrap tw-items-center tw-justify-center ">
                {
                    categories.map((i, idx) => {
                        return <Box as={motion.div} 
                        
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
                                delay: idx * 0.5
                            }}
                        onClick={() => handleClick(i)} className=" tw-mx-4 tw-my-5 tw-relative">
                            <ContentBox className="content-box tw-w-full tw-h-full tw-bg-primary tw-text-white  tw-cursor-pointer tw-py-10 tw-text-center tw-justify-center ">
                                <Paragraphs size='xl' family='universe' uppercase>{i.name}</Paragraphs>

                            </ContentBox>

                                
                         
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
