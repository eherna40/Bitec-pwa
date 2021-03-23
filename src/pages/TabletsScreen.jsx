import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Tablet from '../components/Tablet/Tablet'
import { selectTablet } from '../infraestructure/api/API'
import useFetch from '../infraestructure/hook/useFetch'
import useLocalData from '../infraestructure/hook/useLocalData'
import tablet1 from '../assets/img/tablet_1.png'
import tablet2 from '../assets/img/tablet_2.png'
import { motion } from 'framer-motion'
const TabletsScreen = () => {
    const history = useHistory()
    const { saveData } = useLocalData()
    const [doFetch, { data }] = useFetch('getTablets')
    const [onCompleteBackground, setOnCompleteBackground] = useState(false)
    const [loading, setloading] = useState(false)
    useEffect(() => {
        doFetch()
    }, [])

    const handleSelect = async (id) => {

        try {
            setloading(true)
            const { status, data } = await selectTablet(id)
            if (status === 'success') {
                const categories = await saveData(data)
                history.push({
                    pathname: '/campaing',
                    data: categories
                })
            }
        } catch (error) {

        }

        setloading(false)


    }
    return (
        <div className="TabletsScreen">
            <motion.div
                initial={{
                    left: '-100%'
                }}
                animate={{
                    left: '100%'
                }}
                transition={{
                    duration: 1
                }}
                onAnimationComplete={() => setOnCompleteBackground(true)} className="tw-fixed tw-w-screen tw-h-screen tw-top-0 tw-left-0 tw-bg-white tw-z-50" />
            {
                loading && <motion.div

                    initial={{
                        left: '-100%'
                    }}
                    animate={{
                        left: 0
                    }}
                    className="tw-bg-white tw-bg-opacity-80 tw-fixed tw-top-0 tw-left-0 tw-h-screen tw-w-screen tw-z-50"></motion.div>
            }
            {
                onCompleteBackground && <div className="Tablets-list tw-flex tw-flex-wrap">
                    {
                        data && data.map((i, idx) => {
                            const par = idx % 2 === 0;
                            return <Tablet image={par ? tablet1 : tablet2} {...i} idx={idx} key={i.id} onPress={handleSelect} />
                        })
                    }
                </div>
            }


        </div>

    )
}



export default TabletsScreen
