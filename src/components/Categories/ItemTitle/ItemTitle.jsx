import React, { useState } from 'react'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Number } from './styles'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'


const item = {
    hidden: {opacity: 0},
    visible: {opacity: 1}

}

const ItemTitle = props => {
    const [state, setstate] = useState(true)
    return (
        <div
            className="strip-anim-container tw-relative"
            onClick={() => setstate(!state)}
        >
            <Link to='/tablets' className="ItemTitle tw-flex tw-float-left tw-clear-both tw-relative tw-overflow-hidden">
               <motion.div className="tw-flex" variants={item} animate={!state ? "hidden" : "visible"} transition={{
                   duration: 1.3
               }} >
               <Number className="number tw-relative">
                    <Paragraphs family='extralight' size='3xl' className="tw-text-white">01.</Paragraphs>
                </Number>
                <Paragraphs family='universe' size='3xl' className="tw-text-white tw-uppercase tw-ml-3">categoria</Paragraphs>
               </motion.div>

                <motion.div
                className="tw-absolute tw-top-0 tw-left-0 tw-bg-white tw-h-full tw-w-full"
                transition={{
                    duration: 1
                }}
                initial={{
                   left: '-100%' 
                }}
                animate={{
                    left: '-100%' 
                 }}
                exit={{
                    left: '100%' ,
                
                 }}
                >
                    {/* <Strip /> */}
                </motion.div>


            </Link>
        </div>

    )
}

export default ItemTitle
