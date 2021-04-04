import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Carousel from '../components/Carousel/Carousel'
import Reference from '../components/Reference/Reference'
import Name from '../components/ProductScreen/Name/Name'
import { BtnBack } from '../components/BtnBack/BtnBack'
import Head from '../components/Head/Head'
import ContentInfo from '../components/ContentInfo'
import Compare from '../components/ProductScreen/Comparador'
const ProductScreen = () => {

    const history = useHistory()
    const [data, setdata] = useState(null)

    useEffect(() => {
        if (history.location.state)
            setdata({
                ...history.location.state
            })
        else
            history.replace('/campaing')

    }, [])


    if (data) {
        const {
            images,
            name,
            reference,
            description,
            especifications,
            features,
            accesories,
            ean13,
            compare
        } = data


        return (
            <div head={true} btnBack={true} className="Layout tw-relative tw-h-screen tw-w-full tw-flex">

                <Head />
                <BtnBack />
                
                <div className="tw-w-6/12 tw-h-full">
                    <Name name={name} description={description} />
                    <Carousel images={images} />
                </div>
                <div className="tw-w-6/12 tw-h-full tw-relative tw-flex tw-flex-col">
                    <Reference reference={reference} ean13={ean13} absolute={false} />
                    <div className="tw-absolute tw-right-20 tw-top-10 tw-z-50">
                    <Compare img={compare} />
                    </div>
                    <div className="tw-flex-1">
                        <ContentInfo features={features} accesories={accesories} especifications={especifications}  />
                    </div>
                </div>
            </div>
        )
    }

    else
        return null
}

export default ProductScreen
