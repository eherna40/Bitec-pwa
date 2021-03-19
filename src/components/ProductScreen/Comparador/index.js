import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Modal } from './styles'
import Demo from '../../../assets/img/demo.png'
const Comprador = props => {
    const [open, setopen] = useState(false)
    return (
        <div className="Comparador">
            <button onClick={() => setopen(true)} className="tw-bg-primary tw-px-6  tw-py-1 tw-rounded-full" style={{ outline: 'none' }}>
                <Paragraphs className="tw-text-white" family='universe'>Compara</Paragraphs>
            </button>
            {
                open && <Modal onClick={() => setopen(false)} className="tw-fixed tw-h-screen tw-w-screen tw-top-0 tw-left-0 tw-z-50 tw-bg-white tw-bg-opacity-80">
                    <div className="tw-flex tw-items-center tw-justify-center" >
                        <img src={Demo} style={{ maxWidth: '80%' }} />

                    </div>
                </Modal>
            }
 
        </div>
    )
}

Comprador.propTypes = {

}

export default Comprador
