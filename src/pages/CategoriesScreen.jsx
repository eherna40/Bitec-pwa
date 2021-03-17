
import React from 'react'
import Layout from '../components/Layout/Layout'
import { useHistory } from 'react-router-dom';
import Line from '../components/Categories/Line/Line';
import Category from '../components/Categories/Category/Category';

const CategoriesScreen = props => {
    let history = useHistory();
    const data = history.location.state.categories

    const handleSelect = (item)=> {
        history.push({
            pathname:'/category',
            state:{item}
        })
    }
    return (
        <Layout className='tw-p-10 tw-full ' header>
            <div className="tw-px-40 tw-flex tw-items-center tw-h-full">
                <Line className="tw-bg-black-800" />
                <div className="tw-cursor-pointer">
                    {
                        data.categories.map(i => {
                            return <Category {...i} onPress={() => handleSelect(i)}/>
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

CategoriesScreen.propTypes = {

}

export default CategoriesScreen
