import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'

const Category = ({
    name,
    onPress,
    idx
}) => {
    return (
        <div className="Category tw-p-4 tw-mx-3 tw-cursor-pointer tw-flex" onClick={onPress}>
            <Paragraphs size={'3xl'} className="tw-text-white tw-mr-3" italic family='black'>{idx + 1}. </Paragraphs>
            <Paragraphs size={'3xl'} className="tw-text-white" italic family='black'>{name}</Paragraphs>
        </div>
    )
}

Category.propTypes = {
    name: PropTypes.string,
    onPress: PropTypes.func
}

export default Category
