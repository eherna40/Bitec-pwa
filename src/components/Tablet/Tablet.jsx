import React from 'react'
import PropTypes from 'prop-types'
import {  Container} from './styles'
import Paragraphs from '../Paragraphs/Paragraphs'
import { motion } from 'framer-motion'

const Tablet = ({
    code,
    store,
    campaings,
    onPress,
    id,
    idx,
    image: Image
}) => {
    return (
        <Container as={motion.div} initial={{
            opacity: 0,
            left: -10
        }}
            transition={{
                duration: .5,
                delay: idx * 0.1
            }}
            animate={{
                opacity: 1,
                left: 0
            }}
            exit={{
                opacity: 0,
                left: 10
            }}
            idx={idx} className="Table tw-relative tw-p-9 tw-flex tw-justify-center tw-text-white tw-cursor-pointer">
            <div onClick={() => {
                onPress(id)}
                } className="touch">
                <div className="tw-text-center">
                    <Paragraphs size='3xl' className="tw-text-black-800" family='universe'>{code}</Paragraphs>
                    <Paragraphs size='base' className="tw-text-black-800" family='universe'>{store}</Paragraphs>

                </div>
                <div className="tw-p-10">
                    <img alt='tablet' src={Image} />
                </div>
            
            </div>

        </Container>
    )
}


Tablet.propTypes = {
    code: PropTypes.string,
    store: PropTypes.string,
    campaings: PropTypes.array,
    onPress: PropTypes.func
}
export default Tablet
