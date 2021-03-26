import React from 'react'
import PropTypes from 'prop-types'
import Carousels from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { motion } from 'framer-motion';
import { Box } from './style';

const Carousel = ({ images }) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 1.3,
                delay: 0
            }}
            className="tw-h-full tw-relative"

        >
            <div className="tw-absolute tw-left-4 tw-top-72 tw-z-30">
                {
                    images.map(i => {
                        return <Box className="tw-rounded-md tw-overflow-hidden tw-shadow-md tw-mb-4" >
                            <img src={i.url} />
                        </Box>
                    })
                }
            </div>

            <Carousels
                className="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center"
                plugins={[
                    'centered']}
            >
                {
                    images.map(i => {
                        return <img src={i.url} alt={i.url} />

                    })
                }
            </Carousels>




        </motion.div>
    )
}

Carousel.propTypes = {
    images: PropTypes.array
}

Carousel.defaultProps = {
    images: []
}

export default Carousel
