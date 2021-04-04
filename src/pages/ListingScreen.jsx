import React, { useEffect, useState } from 'react'
import Head from '../components/Head/Head'
import { BtnBack } from '../components/BtnBack/BtnBack'
import { useLocation } from 'react-use'
import Listing from '../components/Listing/Listing'

const ListingScreen = () => {
    const [productos, setProductos] = useState([])
    const location = useLocation()

    useEffect(() => {
        const { state: { state } } = location
        const products = state.data.products
        setProductos(products)
    }, [])

    return (
        <div className="Listing tw-h-screen">
            <Head />
            <BtnBack />
            <Listing products={productos} />
        </div>
    )
}

ListingScreen.propTypes = {

}

export default ListingScreen
