import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Carousel from '../components/Carousel/Carousel'
import Reference from '../components/Reference/Reference'
import Name from '../components/ProductScreen/Name/Name'
import Selectors from '../components/ProductScreen/Selectors/Selectors'
import Features from '../components/ProductScreen/Features/Features'
import Comprador from '../components/ProductScreen/Comparador'
import { BtnBack } from '../components/BtnBack/BtnBack'
import Head from '../components/Head/Head'
import { motion } from 'framer-motion'
import ContentInfo from '../components/ContentInfo'

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
            <div head={true} btnBack={true} className="Layout tw-relative tw-h-screen tw-w-full" style={{
                paddingTop: 60
            }}>

                <Head />
                <BtnBack />
                <motion.div className="tw-absolute"

                    initial={{
                        opacity: 0,
                        top: 30
                    }}
                    animate={{
                        opacity: 1,
                        top: 70
                    }}
                    transition={{
                        duration: 1
                    }}
                    style={{
                        left: 90,
                        zIndex: 9999,
                        maxWidth: '40%'
                    }}>
                    <Name name={name} />
                </motion.div>
                <Selectors onPress={(i) => setInfo(i)} info={info} />

                <div className="tw-flex tw-h-full ">
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
                            {/* <div className="tw-overflow-auto" style={{ maxHeight: 'calc(100vh - 70px - 70px)' }}> */}
                            <ContentInfo description={description} especifications={especifications} />


                        </motion.div>

                    </div>


                </div>
                <div
                    style={{
                        height: 120,

                    }}
                    className="tw-fixed tw-bottom-0 	 tw-z-50 tw-bg-white tw-bg-opacity-90 tw-w-7/12"

                >

                    <Features info={info} data={info === 1 ? features : accesories} title={info === 1 ? 'Especificaciones' : 'Accesorios'} />
                </div>
            </div>
        )
    }

    else
        return null
}

export default ProductScreen
