import React from 'react'
import PropTypes from 'prop-types'
import Reference from '../../Reference/Reference'
import { useHistory } from 'react-router-dom'

const Product = ({ images, reference, id, accesories, category, price, compare, description, description_short, name, upc, features, especifications }) => {
    const cover = images.find(i => i.cover === '1')
    const history = useHistory()

    const handleSelect = () => {
        history.push({
            pathname: '/product',
            state: {
                images, reference, id, accesories, category, price, compare, description, description_short, name, upc, features, especifications
            }
        })
    }
    if(!cover) return null
    return (
        <div className="Product tw-relative tw-w-2/12" onClick={handleSelect}>
            <div className="tw-p-5 ">
                <img src={cover ? cover?.url : ''} />
                <Reference absolute={true} reference={reference} />
            </div>
        </div>
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