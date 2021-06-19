import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Container } from './styles'
import { motion } from 'framer-motion'
import Paragraphs from '../../Paragraphs/Paragraphs'


const Product = ({ length, idx, images, reference, id, accesories, category, price, compare, description, description_short,ean13, name, upc, features, especifications }) => {
    const cover = images.find(i => i.cover === '1')
    const history = useHistory()

    const handleSelect = () => {
        history.push({
            pathname: `/product/${id}`,
            state: {
                images, ean13, reference, id, accesories, category, price, compare, description, description_short, name, upc, features, especifications
            }
        })
    }
    if(!cover) return null
    return (
        <Container length={length} col={4} idx={idx} className="Product  tw-relative" onClick={handleSelect}>
            <div className="tw-p-5 tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center ">
                <motion.img style={{ maxHeight: 300 }} alt='product' src={cover ? cover?.url : ''} initial={{ 
                    opacity: 0,
                    left: -5
                 }} 
                 animate={{ 
                     opacity: 1,
                     left:0
                  }}
                 />
                <div className="tw-text-center">
                    <motion.div className="tw-text-center tw-w-full tw-absolute tw-left-0" initial={{ 
                        bottom: 0,
                        opacity: 0
                     }}
                     animate={{ 
                         bottom: 80,
                         opacity: .8
                      }}
                      transition={{ 
                          duration: 0.2
                       }}
                     >
                        <Paragraphs family='extrabold' size='4xl'  >
                            {reference}
                        </Paragraphs>
                    </motion.div>
                    
                </div>
            </div>
        </Container>
    )
}

Product.propTypes = {
    images: PropTypes.array,
    reference: PropTypes.string,
    id: PropTypes.number,
    accesories: PropTypes.array,
    category: PropTypes.string,
    price: PropTypes.number,
    compare: PropTypes.string,
    description: PropTypes.string,
    description_short: PropTypes.string,
    name: PropTypes.string, upc: PropTypes.string, features: PropTypes.array,
    especifications: PropTypes.array
}

Product.defaultProps = {
    images: []
}

export default Product