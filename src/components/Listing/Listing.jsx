import React from 'react'
import PropTypes from 'prop-types'
import Virtual from '../Miniature/Video/Virtual'
import Product from '../Miniature/Product/Product'

const Listing = ({products}) => {
    
    return (
        <div className="Products tw-flex tw-flex-wrap">
            {
                products.map(i => Number(i.is_virtual) ? <Virtual {...i} /> : <Product {...i} />)
            }
        </div>
    )
}

Listing.propTypes = {
    products: PropTypes.array
}
Listing.defaultProps = {
    products: []
}


export default Listing
