import React from 'react'
import { useHistory } from 'react-router-dom'
import IcBack from '../Icons/IcBack'
import { Container } from './style'

export const BtnBack = () => {
    const history = useHistory()
    return (
        <Container onClick={() => history.goBack()} className="BtnBack tw-fixed tw-rounded-r-full tw-py-1 tw-pl-6 tw-pr-10 tw-py-4 tw-border  ">
            <IcBack color='#333' size={20}/>
        </Container>
    )
}
