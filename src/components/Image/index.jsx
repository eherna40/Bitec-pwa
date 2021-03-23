import React from 'react'
import PropTypes from 'prop-types'

const Image = ({blob}) => {

    useEffect(() => {
        var objectURL = URL.createObjectURL(blob);
        console.log(objectURL)
    }, [])
    return (
        <div>
            
        </div>
    )
}

Image.propTypes = {
    url: PropTypes.object,
}

export default Image
