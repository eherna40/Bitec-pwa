import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'

const Especifications = ({ data }) => {
    return (
        <div  className="tw-p-6">
            {
                data.map(i => <div className="tw-mb-5">
                    <Paragraphs italic family='medium' className="tw-text-white" size='sm' key={i.id_especificacion}>{i.data}</Paragraphs>
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
