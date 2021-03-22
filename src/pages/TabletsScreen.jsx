import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Paragraphs from '../components/Paragraphs/Paragraphs'
import Tablet from '../components/Tablet/Tablet'
import { getTablets, selectTablet } from '../infraestructure/api/API'
import useFetch from '../infraestructure/hook/useFetch'
import useLocalData from '../infraestructure/hook/useLocalData'
import tablet1 from '../assets/img/tablet_1.png'
import tablet2 from '../assets/img/tablet_2.png'
import BackgroundAnimation from '../components/BackgroundAnimation'

const TabletsScreen = () => {
    const history = useHistory()
    const {saveData} = useLocalData()
    const [doFetch, {data, loading, error}] = useFetch('getTablets')
    const [onCompleteBackground, setOnCompleteBackground] = useState(false)
    const [selected, setselected] = useState(null)
    useEffect(() => { 
        doFetch()
    }, [])
    console.log(data, loading, error)
    
    const handleSelect = async(id)=> {
        history.push({
                    pathname: '/campaing',
                })
        try {
            // const { status, data } = await selectTablet(id)

            // if (status === 'success') {
            //    const categories = await saveData(data)
            //     history.push({
            //         pathname: '/campaing',
            //         data: categories
            //     })
            // }
        } catch (error) {
            
        }
     

    }
    return (
        <div className="TabletsScreen">
            <BackgroundAnimation mode='white' onAnimtaionEnd={() => setOnCompleteBackground(true)} />
            {
                onCompleteBackground &&  <div className="Tablets-list tw-flex tw-flex-wrap">
                {
                    data && data.map((i, idx) => {
                        const par = idx%2 === 0;
                        return <Tablet image={par ? tablet1 : tablet2} {...i} idx={idx} key={i.id} onPress={handleSelect} />
                    })
                }
            </div>
            }
            
          
        </div>

    )
}



export default TabletsScreen
