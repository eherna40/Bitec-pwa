import React, { useState } from 'react'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Modal } from './styles'
const Compare = ({img}) => {
    const [open, setopen] = useState(false)
    return (
        <div className="Comparador">
            <button onClick={() => setopen(true)} className="tw-bg-primary tw-px-6  tw-py-1 tw-rounded-full" style={{ outline: 'none' }}>
                <Paragraphs className="tw-text-white" family='universe'>Compara</Paragraphs>
            </button>
            {
                open && <Modal onClick={() => setopen(false)} className="tw-fixed tw-h-full tw-w-full tw-top-0 tw-left-0 tw-z-50 tw-bg-white">
                    <div className="tw-flex tw-items-center tw-justify-center tw-h-full tw-w-full" >
                        <img alt='demo' src={img} style={{ maxWidth: '50%' }} />

                    </div>
                </Modal>
            }
 
        </div>
    )
}


export default Compare
