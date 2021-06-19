import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import parse from 'html-react-parser';


const Container = styled(motion.div)`
    top: 85px;
    left: 75px;
             z-index: 10;
             width: 40%;
`

const Name = ({ name, description }) => {
    return (
        <Container
            className="tw-absolute"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,

            }}
            transition={{
                delay: .5,
                duration: .5
            }}
        >
            <Paragraphs family='universe' size='5xl' className="tw-text-black-800 ">
                {name}
            </Paragraphs>
            <Paragraphs size={'sm'}>
                {parse(description)}
            </Paragraphs>
        </Container>
    )
}

Name.propTypes = {
    name: PropTypes.string
}

export default Name
