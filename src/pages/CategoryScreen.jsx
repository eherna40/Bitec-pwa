import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout/Layout'
import { useHistory } from 'react-router-dom'
import Tabs from '../components/Tabs/Tabs'
import Listing from '../components/Listing/Listing'

const CategoryScreen = props => {
    
    const history = useHistory()
    const [products, setProducts] = useState([])
    const { subcategories } = history.location.state.item

    useEffect(() => {
        if(subcategories && subcategories.length > 0){
            setProducts(subcategories[0].products)
        }
    }, [])

    const handleSelect = (item)=> {
        console.log(item)
        setProducts(item.products)
    }

    return (
        <Layout head={true}  className="CateogryScreen" btnBack>
            <Tabs categories={subcategories} onPress={handleSelect} />
            <Listing products={products} />
        </Layout>
    )
}

CategoryScreen.propTypes = {

}

export default CategoryScreen
