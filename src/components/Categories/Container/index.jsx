import React, { useState } from 'react'
import { Content } from './styles'
import LateralBar from '../LateralBar'
import { motion } from 'framer-motion'

const Container = ({children}) => {
    const [showData, setshowData] = useState(false)
    return (

        <Content className='tw-h-screen tw-w-screen tw-relative tw-flex'>
            <motion.div onAnimationComplete={() => setshowData(true)} className="tw-fixed tw-w-screen tw-h-screen tw-top-0 tw-left-0 tw-bg-white tw-z-50"
                initial={{
                    left: '-100%'
                }}
                animate={{
                    left: '100%'
                }}
                exit={{ 
                    left: 0
                 }}
                transition={{ 
                    duration: .5
                 }}
            />
            {
                showData && <>
                    <LateralBar />
                    {children}
                </>
            }
          
        </Content>
    )
}

export default Container
