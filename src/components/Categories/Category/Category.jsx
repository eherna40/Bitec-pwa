import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'

const Category = ({
    name,
    onPress
}) => {
    return (
        <div className="Category tw-p-4 tw-mx-3 tw-cursor-pointer" onClick={onPress}>
            <Paragraphs size={'3xl'} italic family='black'>{name}</Paragraphs>
        </div>
    )
}

Category.propTypes = {
    name: PropTypes.string,
    onPress: PropTypes.func
}

export default Category
