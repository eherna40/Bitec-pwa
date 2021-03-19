
import React from 'react'
import Layout from '../components/Layout/Layout'
import { useHistory } from 'react-router-dom';
import Line from '../components/Categories/Line/Line';
import Category from '../components/Categories/Category/Category';
import styled from 'styled-components';
import Paragraphs from '../components/Paragraphs/Paragraphs';
import LateralBar from '../components/Categories/LateralBar';
import Lookbook from '../components/Categories/LookBook';
import Container from '../components/Categories/Container';
import ItemTitle from '../components/Categories/ItemTitle/ItemTitle';



const CategoriesScreen = props => {
    let history = useHistory();
    const data = history.location.state.categories
    console.log(data)
    const handleSelect = (item)=> {
        history.push({
            pathname:'/category',
            state:{item}
        })
    }
    return (
        <Container>
            <div className="tw-flex-1 tw-pl-20 tw-relative tw-z-10 tw-flex tw-justify-center tw-flex-col">
                <ItemTitle />
            </div>
            <div className="tw-flex-1 tw-relative tw-z-10 tw-flex tw-items-center tw-justify-center">
                <Lookbook />
            </div>
            {/* <Layout className='tw-p-10 tw-full '>
                <div className="tw-pl-10">
                    <Lookbook />
                </div>
                <div className="tw-px-40 tw-flex tw-items-center tw-h-full tw-justify-between">
                   
                    <div className="tw-cursor-pointer">
                       
                        <Paragraphs className="tw-text-white tw-italic">
                            Escoge tu categoría:
                    </Paragraphs>
                        {
                            data.categories.map((i, idx) => {
                                return <Category {...i} idx={idx} onPress={() => handleSelect(i)} />
                            })
                        }
        
                    </div>
                 
                </div>
        
            </Layout> */}
        </Container>

        
    )
}

CategoriesScreen.propTypes = {

}

export default CategoriesScreen
