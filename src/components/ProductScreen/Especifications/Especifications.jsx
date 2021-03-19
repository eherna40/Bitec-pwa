import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Line } from './styles'

const Especifications = ({ data }) => {
    return (
        <div  className="tw-p-6">
            {
                data.map(i => <div className="tw-mb-5">
                    <Line className="tw-bg-white" />
                    <Paragraphs italic family='medium' className="tw-text-black-800" size='sm' key={i.id_especificacion}>{i.data}</Paragraphs>
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
