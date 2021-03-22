import React from 'react'
import ItemTitle from '../ItemTitle/ItemTitle'

const Listing = ({data}) => {
    return (
        <div>
            {
                data.map((i, idx) => <ItemTitle {...i} idx={idx} />)
            }
          
        </div>
    )
}


export default Listing
