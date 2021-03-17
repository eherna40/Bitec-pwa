import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'

const Selectors = ({ onPress, info }) => {
    return (
        <div className="tw-flex tw-justify-end tw-items-center">
            <div className={`tw-px-4 tw-opacity-${info !== 1 ? '25' : '100'}`} onClick={() => onPress(1)}>
                <Paragraphs italic family='universe' uppercase size='lg'>
                    Especifiaciones
            </Paragraphs>
            </div>
            <div className={`tw-px-4 tw-opacity-${info !== 2 ? '25' : '100'}`} onClick={() => onPress(2)}>
                <Paragraphs italic family='universe' uppercase size={info === 1 ? 'xl' : 'lg'}>
                    Accesorios
            </Paragraphs>
            </div>
        </div>
    )
}

Selectors.propTypes = {

}

export default Selectors
