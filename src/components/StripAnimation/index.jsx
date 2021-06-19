import { motion } from 'framer-motion'
import React from 'react'

const StripAnimation = ({ children, duration, delay = 0, onAnimationComplete, className }) => {
    return (
        <div className={`${className} ItemTitle tw-flex tw-float-left tw-clear-both tw-relative tw-overflow-hidden`}>
            <motion.div
                className="tw-absolute tw-top-0 tw-left-0 tw-bg-white tw-h-full tw-w-full"
                transition={{
                    duration: duration || .5,
                    delay
                }}
                initial={{
                    left: '100%'
                }}
                animate={{
                    left: '-100%'
                }}
                exit={{
                    left: '100%',
                }}
                onAnimationComplete={onAnimationComplete}
            >
            </motion.div>
            <motion.div
                transition={{
                    duration: duration || .5,
                    type: 'just',
                    delay
                }}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                exit={{
                    opacity: 0
                }}
            >

                {children}
            </motion.div>

        </div>

    )
}

StripAnimation.propTypes = {

}

export default StripAnimation
