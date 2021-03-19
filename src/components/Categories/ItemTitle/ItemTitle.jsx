import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Number } from './styles'

const ItemTitle = props => {
    return (
        <div className="ItemTitle tw-flex">
            <Number className="number tw-relative">
                <Paragraphs family='extralight' size='3xl' className="tw-text-white">01.</Paragraphs>
            </Number>
            <Paragraphs family='universe' size='3xl' className="tw-text-white tw-uppercase tw-ml-3">categoria</Paragraphs>

        </div>
    )
}

export default ItemTitle
