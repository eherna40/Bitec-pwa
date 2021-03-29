import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import { BtnBack } from '../BtnBack/BtnBack'
import Head from '../Head/Head'
import { Container } from './style'

const Layout = ({children, className, header, btnBack, head, padding}) => {
    return (
        <div padding={padding} head={head} className={`tw-h-screen tw-w-full ${className}`}>
        {
            head && <Head />
        }
        {
                header && <Header />
        }
        {
                btnBack && <BtnBack />
        }
           
            {children}
        </div>
    )
}


Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    className: PropTypes.string,
    header: PropTypes.bool,
        btnBack: PropTypes.bool,
    head: PropTypes.bool,
}
export default Layout
