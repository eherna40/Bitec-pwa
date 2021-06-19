import React from 'react'
import { motion } from 'framer-motion'

const BackgroundAnimation = ({onAnimtaionEnd, mode}) => {
    return (
        <motion.div 
            transition={{
                duration: .5
            }}
            initial={{
                left: '-100%'
            }}
            animate={{
                left:  mode === 'white' ?'-100%' : 0
            }}
            exit={{
                left: '100%',
                transition:{
                    delay: 2,
                    duration: .5,
                }
            }}
            onAnimationComplete={onAnimtaionEnd}
            className="tw-fixed tw-top-0 tw-left-0 tw-h-screen tw-w-screen tw-bg-black-800 ">
        </motion.div>
    )
}

export default BackgroundAnimation
