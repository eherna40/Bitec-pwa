import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import Tabs from '../components/Tabs/Tabs'
import Listing from '../components/Listing/Listing'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const CategoryScreen = props => {
    const { data } = useSelector(state => state.categoryReducer)
    let { id } = useParams();
    const [onCompleteAnimation, setonCompleteAnimation] = useState(false)
    const [products, setProducts] = useState([])
    const { subcategories } = data.find(i => Number(i.id) === Number(id))

    const handleSelect = (item)=> {
        setProducts(item.products)
    }
    useEffect(() => {
        if (subcategories.length > 0) {
            setProducts(subcategories[0].products)
        }
    }, [])

    return (
        <Layout head={true} className="CateogryScreen" btnBack>
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
                onCompleteAnimation && <>
                    <Tabs categories={subcategories} onPress={handleSelect} />
                    <Listing products={products} />
                </>
            }
          
        </Layout>
    )
}



export default CategoryScreen
