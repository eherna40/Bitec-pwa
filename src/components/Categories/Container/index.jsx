import React from 'react'
import { Content } from './styles'
import LateralBar from '../LateralBar'

const Container = ({children}) => {
    return (

        <Content className='tw-h-screen tw-w-screen tw-relative tw-flex'>
            <LateralBar />
            {children}
        </Content>
    )
}

export default Container
