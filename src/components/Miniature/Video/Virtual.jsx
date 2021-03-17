import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Overload } from './styles'
import Play from '../../Play/Play'
import { useHistory } from 'react-router-dom'

const Virtual = ({ name, images, url, description, description_short }) => {
    const history = useHistory()
    const handleOpen = () => {
        history.push({
            pathname: '/video',
            state: {
                name,
                url,
                description,
                description_short
            }
        })
    }
    const cover = images.find(i => i.cover === '1')

    if(!url) return null
    return (
        <div className="tw-w-3/12" onClick={handleOpen}>
            <div className="tw-p-5 ">
                <div className="tw-overflow-hidden tw-rounded tw-relative">

                    <img src={cover.url} />
                    <Overload className="tw-absolute tw-top-0 tw-left-0  tw-w-full tw-h-full tw-text-white tw-p-3 tw-flex tw-items-center tw-justify-center">
                        <Play />
                        <div className="tw-absolute tw-bottom-0 tw-left-0 tw-p-4">
                            <Paragraphs italic family='extrabolditalic'>{name}</Paragraphs>
                        </div>

                    </Overload>
                </div>
            </div>
        </div>
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
