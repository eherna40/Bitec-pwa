import React from 'react'
import PropTypes from 'prop-types'
import Carousels from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Carousel =    ({images}) => {
    return (
        <Carousels plugins={['arrows']} className="tw-h-full" plugins={[
            'centered']}>
            {
                images.map(i => {
                   return <img src={i.url} />

                })
            }

        </Carousels>
    )
}

Carousel.propTypes = {
    images: PropTypes.array
}

Carousel.defaultProps = {
    images: []
}

export default Carousel
