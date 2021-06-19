import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Overload, Container } from './styles'
import Play from '../../Play/Play'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

const Virtual = ({ name, images, url, description, description_short, idx, length , video_blob}) => {
    const history = useHistory()
    const handleOpen = () => {
        history.push({
          pathname: "/video",
          state: {
            name,
            url,
            description,
            description_short,
            video_blob,
          },
        });

    }
    const cover = images.find(i => i.cover === '1')
    if (!url) return null
    return (

        <Container noBorder={true} onClick={handleOpen}>
            <motion.div className="tw-relative tw-h-full" initial={{ 
                opacity: 0,
                left: -4
             }}
             animate={{ 
                 opacity: 1,
                 left: 0
              }}
              transition={{ 
                  delay: idx * 0.1
               }}

             >
                <div className="tw-h-full tw-w-full" style={{ 
                        backgroundImage: `url(${cover.url})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                 }} >
                    {/* <img alt='category' src={cover.url} className="tw-opacity-0" /> */}
                 </div>

                <Overload className="tw-absolute tw-top-0 tw-left-0  tw-w-full tw-h-full tw-text-white tw-p-3 tw-flex tw-items-center tw-justify-center">
                    <Play />
                    <div className="tw-absolute tw-bottom-0 tw-left-0 tw-p-4">
                        <Paragraphs italic family='extrabolditalic'>{name}</Paragraphs>
                    </div>
                </Overload>
            </motion.div>
        </Container>
    )
}

Virtual.propTypes = {
    name: PropTypes.string,
    images: PropTypes.array
}

Virtual.defaultProps = {
    imags: []
}

export default Virtual
