import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Line } from './styles'

const Especifications = ({ data }) => {
    return (
        <div>
            {
                data.map(i => <div className="tw-mb-5">
                    <Line className="tw-bg-black-800" />
                    <Paragraphs italic family='bolditalic' className="tw-text-black-600" size='md' key={i.id_especificacion}>{i.data}</Paragraphs>
                </div>)
            }
        </div>
    )
}

Especifications.propTypes = {
    data: PropTypes.array
}

Especifications.defaulProps = {
    data: []
}

export default Especifications
