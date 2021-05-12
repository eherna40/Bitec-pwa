import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo/Logo'
import Spinner from '../components/Spinner/Spinner'
import { useHistory } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import StripAnimation from '../components/StripAnimation'
import useFetch from '../infraestructure/hook/useFetch'
import BackgroundAnimation from '../components/BackgroundAnimation'
import { useNetworkState } from 'react-use'
const SplashScreen = () => {
    const history = useHistory()
    const [doFetch, { data }] = useFetch('getTablets')
    const [onCompleteBackground, setOnCompleteBackground] = useState(false)
    const [onCompleteText, setOnCompleteText] = useState(false)
const {online} = useNetworkState()
    useEffect(() => {
        if (data) {
            history.replace('/tablets')
        }
        
    }, [data])

    useEffect(() => {
        if (onCompleteText && onCompleteBackground) {
            if(online){
                doFetch()
            }else{
                // history.replace('/tablets')
            }
           
        }
    }, [onCompleteBackground, onCompleteText])


    return (
        <Layout className="Splash tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col tw-w-full">
            <BackgroundAnimation onAnimtaionEnd={() => setOnCompleteBackground(true)} />
            <StripAnimation delay={1} onAnimationComplete={() => setOnCompleteText(true)}>
                <Logo mode='light' size='large' />
            </StripAnimation>
            <Spinner />
        </Layout>

    )
}

export default SplashScreen
