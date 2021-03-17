import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'

const Name = ({name}) => {
    return (
        <div>
            <Paragraphs family='universe' size='5xl' className="tw-text-black-800 tw-my-5">
                {name}
            </Paragraphs>
        </div>
    )
}

Name.propTypes = {
name: PropTypes.string
}

export default Name
