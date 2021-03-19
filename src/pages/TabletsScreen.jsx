import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Paragraphs from '../components/Paragraphs/Paragraphs'
import Tablet from '../components/Tablet/Tablet'
import { getTablets, selectTablet } from '../infraestructure/api/API'
import useLocalData from '../infraestructure/hook/useLocalData'

const TabletsScreen = () => {
    const history = useHistory()
    const {saveData} = useLocalData()
    const [tablets, setTablets] = useState([])
    useEffect(() => {
        getTablets().then(({ status, data }) => {
            console.log(status)
            if (status === 'success')
                setTablets(data)
        })
    }, [])
    
    const handleSelect = async(id)=> {
        try {
            const { status, data } = await selectTablet(id)

            if (status === 'success') {
                saveData(data)
                history.push({
                    pathname: '/campaing',
                    state: {
                        categories: data
                    }
                })
            }
        } catch (error) {
            
        }
     

    }
    return (
        <Layout className="TabletsScreen tw-p-4">
            <Paragraphs univers size={'4xl'} uppercase family='univers'>
                Selecciona dispositivo
                </Paragraphs>
            <Paragraphs size={'xs'} italic>
                Seleccione el codigo de la tablet y establecimiento que desea configurar
                </Paragraphs>
            <div className="Tablets-list tw-flex tw-flex-wrap">
                {
                    tablets.map((i, idx) => 
                    <Tablet {...i} idx={idx} key={i.id} onPress={handleSelect} />)
                }

            </div>
        </Layout>

    )
}



export default TabletsScreen
