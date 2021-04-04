
import React from 'react'
import Container from '../components/Categories/Container';
import Listing from '../components/Categories/Listing';
import { useSelector } from 'react-redux';



const CategoriesScreen = props => {



    const { data } = useSelector(state => state.categoryReducer)

    return (
        <Container>
            <div className="tw-flex-1 tw-pl-20 tw-relative tw-z-10 tw-flex tw-justify-center tw-flex-col" style={{ width: 500 }}>
                <Listing data={data} />
            </div>

        </Container>


    )
}

export default CategoriesScreen
