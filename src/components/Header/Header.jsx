import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../Logo/Logo'
import { Line } from './styles'
import Paragraphs from '../Paragraphs/Paragraphs'

const Header = props => {
    return (
        <div className="Header tw-flex">
            <Line className="tw-bg-black-800 tw-mr-2" />
            <div>
                <Logo size='small' />
                <Paragraphs italic size='sm'>
                    Store
                </Paragraphs>
            </div>
            
        </div>
    )
}

Header.propTypes = {

}

export default Header
