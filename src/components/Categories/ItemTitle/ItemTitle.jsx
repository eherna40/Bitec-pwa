import React, { useState } from 'react'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Number } from './styles'
import { Link } from 'react-router-dom'
import StripAnimation from '../../StripAnimation'




const ItemTitle = ({ name, idx, id }) => {
    const [state, setstate] = useState(true)
    return (
        <div
            className="strip-anim-container tw-relative tw-mb-4"
            onClick={() => setstate(!state)}
        >
            <StripAnimation onAnimationComplete={null} className="tw-mb-3">
                <Link to={{ pathname: `/category/${id}`, state: { name } }} className="ItemTitle tw-flex tw-float-left tw-clear-both tw-relative tw-overflow-hidden tw-p-4">
                    <Number className="number tw-relative">
                        <Paragraphs family='extralight' size='3xl' className="tw-text-white">{idx < 10 ? `0${idx + 1}` : idx}.</Paragraphs>
                    </Number>
                    <Paragraphs family='universe' size='3xl' className="tw-text-white tw-uppercase tw-ml-8">{name}</Paragraphs>
                </Link>
            </StripAnimation>
        </div>

    )
}

export default ItemTitle
