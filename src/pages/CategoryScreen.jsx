import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Tabs from '../components/Tabs/Tabs'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { BtnBack } from '../components/BtnBack/BtnBack'
import Head from '../components/Head/Head'
import Name from '../components/ProductScreen/Name/Name'
import { useLocation } from 'react-use'

const CategoryScreen = props => {
    const { data } = useSelector(state => state.categoryReducer)
    let { id } = useParams();
    
    const [onCompleteAnimation, setonCompleteAnimation] = useState(false)
    const filtered  = data.find(i => Number(i.id) === Number(id))
    const location = useLocation()
    const { state: { state } } = location
    return (
        <div head={true} className="CateogryScreen tw-flex"
        >
            <Head />
            <BtnBack />
            <div>
                <Name name={state ? state.name : ''} description='' />
            </div>
            
            <motion.div
                onAnimationComplete={() => setonCompleteAnimation(true)}
                className="tw-fixed tw-h-screen tw-w-screen tw-bg-white tw-top-0"
                style={{
                    zIndex: 99999
                }}
                initial={{
                    left: '100%'
                }}
                animate={{
                    left: '100%'

                }}
                exit={{
                    left: 0
                }}
                transition={{
                    duration: 1
                }}
            >
            </motion.div>
            
            {
                onCompleteAnimation && filtered && filtered.subcategories && <Tabs categories={filtered.subcategories} />

            }

        </div>
    )
}



export default CategoryScreen
