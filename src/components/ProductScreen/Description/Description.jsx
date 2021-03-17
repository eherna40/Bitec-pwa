import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'

const Description = ({ description }) => {
    return (
        <Paragraphs className="tw-my-3 tw-text-grey-400 " italic size='md' >
            {description}
        </Paragraphs>
    )
}

Description.propTypes = {
    description: PropTypes.string
}

export default Description
