import React from 'react'
import PropTypes from 'prop-types'

import Dark from '../../assets/img/worx.black.png'
import Light from '../../assets/img/worx.white.png'
import { Image } from './styles'

const Logo = ({mode,size}) => {
    return (
        <div className="Logo ">
            <Image className="tw-max-full" size={size} src={mode === 'light' ? Light : Dark} />
        </div>
    )
}

Logo.propTypes = {
    mode: PropTypes.oneOf(['light', 'dark']),
    size: PropTypes.oneOf(['small', 'large']),
}

export default Logo
