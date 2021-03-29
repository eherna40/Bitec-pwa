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
    const [info, setInfo] = useState(1)
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
                        <ContentInfo description={description} especifications={especifications} />
                    </div>
                    
                </div>

                {/* <Selectors onPress={(i) => setInfo(i)} info={info} /> */}

                {/* <div className="tw-flex tw-h-full ">
                    <div
                        className="tw-w-7/12 tw-h-full tw-justify-center tw-items-center">
                        <Carousel images={images} />
                    </div>
                    <div className="tw-w-5/12 tw-h-full tw-justify-center tw-items-center tw-pt-5 ">
                        <div className="tw-flex tw-justify-between tw-pr-5">
                            <motion.div initial={{
                                opacity: 0,
                                left: -10
                            }}
                                animate={{
                                    opacity: 1,
                                    left: 0
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 1
                                }}
                            >
                                <Reference reference={reference} ean13={ean13} absolute={false} />
                            </motion.div>

                            <motion.div initial={{
                                opacity: 0,
                                left: -10
                            }}
                                animate={{
                                    opacity: 1,
                                    left: 0
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 2
                                }}
                            >
                                <Comprador img={compare} />
                            </motion.div>

                        </div>
                        <motion.div initial={{
                            opacity: 0,
                            left: -10
                        }}
                            animate={{
                                opacity: 1,
                                left: 0
                            }}
                            transition={{
                                duration: 1,
                                delay: 2
                            }}
                        >
                            <ContentInfo description={description} especifications={especifications} />


                        </motion.div>

                    </div>


                </div> */}
                {/* <div
                    style={{
                        height: 120,

                    }}
                    className="tw-fixed tw-bottom-0 	 tw-z-50 tw-bg-white tw-bg-opacity-90 tw-w-7/12"

                >

                    <Features info={info} data={info === 1 ? features : accesories} title={info === 1 ? 'Especificaciones' : 'Accesorios'} />
                </div> */}
            </div>
        )
    }

    else
        return null
}

export default ProductScreen
