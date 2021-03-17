import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Carousel from '../components/Carousel/Carousel'
import Reference from '../components/Reference/Reference'
import Name from '../components/ProductScreen/Name/Name'
import Description from '../components/ProductScreen/Description/Description'
import Especifications from '../components/ProductScreen/Especifications/Especifications'
import Selectors from '../components/ProductScreen/Selectors/Selectors'
import Features from '../components/ProductScreen/Features/Features'
import Accesories from '../components/ProductScreen/Accesories/Accesories'
import Title from '../components/ProductScreen/Title'

const ProductScreen = () => {
    const history = useHistory()
    const {
        images,
        name,
        reference,
        description,
        especifications,
        features,
        accesories
    } = history.location.state

    const [info, setInfo] = useState(1)

    return (
        <Layout head={true} btnBack={true} className="Layout" >
            <div className="tw-flex tw-flex-col tw-h-full ">
                <div className="tw-flex tw-h-full tw-flex-1">
                    <div className="tw-w-6/12 tw-flex-1 tw-items-center">
                        <Carousel images={images} />
                    </div>
                    <div className="tw-flex-1 tw-relative tw-p-10 tw-flex tw-flex-col">
                        <div className="tw-flex-1">
                            <Reference reference={reference} absolute={false} />
                            <Name name={name} />
                            <Description description={description} />
                            <div className="tw-overflow-auto" style={{ maxHeight: 350 }}>
                                <Especifications data={especifications} />
                            </div>
                            
                        </div>
                        <Selectors onPress={(i) => setInfo(i)} info={info}  />
                    </div>
                </div>
                <div
                    style={{
                        height: 120
                    }}
                    className="tw-overflow-auto "
                >
                    {
                        info === 1 && 
                        <>
                        <Title />
                        <Features data={features} />
                        </>
                         }     
                           
                            {
                        info === 2 && <Accesories data={accesories} />
                            }

                          
                    


                </div>
            </div>
        </Layout>
    )
}

export default ProductScreen
