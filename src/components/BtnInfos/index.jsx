import React from 'react'
import Paragraphs from '../Paragraphs/Paragraphs'
import { Box } from './styles'

const btns = ['característica','Especificaciones', 'Accesorios']

const BtnInfos = ({ handleClick, selected}) => {
    return (
        <div className="BtnInfos tw-absolute tw-flex tw-z-50 tw-right-10" style={{ top: 90 }}>
            {
                btns.map((i, idx) => <Box onClick={() => handleClick(idx)} className={`tw-bg-white tw-px-4 tw-py-2 tw-mx-4 tw-cursor-pointer ${Number(selected) !== Number(idx) && 'tw-opacity-40'}`}>
                    <Paragraphs family='universe' size={'sm'} className="tw-text-black-600 tw-uppercase" >
                        {i}
                    </Paragraphs>
                   
                </Box>)
            }
        </div>
    )
}

BtnInfos.propTypes = {

}

export default BtnInfos
