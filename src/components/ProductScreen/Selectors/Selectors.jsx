import React from 'react'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Container} from './styles'
import { motion } from 'framer-motion'
const Selectors = ({ onPress, info }) => {
    return (
        <Container 
        as={motion.div}
        initial={{ 
            left: -250
         }}
         animate={{ 
             left:-173
          }}
          transition={{ 
              duration: .4
           }}
        className="tw-flex tw-justify-end tw-items-center">
            <div className={`tw-px-4 tw-opacity-${info !== 1 ? '25' : '100'}`} onClick={() => onPress(1)}>
                <Paragraphs italic family='universe' uppercase size='lg'>
                    Especificaciones
            </Paragraphs>
            </div>
            <div className={`tw-px-4 tw-opacity-${info !== 2 ? '25' : '100'}`} onClick={() => onPress(2)}>
                <Paragraphs italic family='universe' uppercase size={info === 1 ? 'xl' : 'lg'}>
                    Accesorios
            </Paragraphs>
            </div>
        </Container>
    )
}

Selectors.propTypes = {

}

export default Selectors
