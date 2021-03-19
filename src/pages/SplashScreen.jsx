import React, {useEffect} from 'react'
import Logo from '../components/Logo/Logo'
import Spinner from '../components/Spinner/Spinner'
import { useHistory } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import * as localForage from "localforage";

localForage.createInstance({
    name: "worx"
});

const SplashScreen = () => {
    const history = useHistory()
    
    useEffect(() => {
        history.push('/tablets')
    }, [])
    // const getItem = () => {
    //     localForage.getItem('keys', function (err, value) {
    //         console.log(value, err)
    //         var url = URL.createObjectURL(value);
    //         console.log(url)
    //     });
    // }

    // const setItem = () => {

    //     fetch('http://techslides.com/demos/sample-videos/small.mp4')
    //         .then(res => res.blob())
    //         .then(res => {
    //             localForage.setItem('keys', res);
    //         })
    // }


    return (
        <Layout className="Splash tw-bg-black-800 tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col tw-w-full">
            <Logo mode='light' size='large' />
            <Spinner />
        </Layout>

    )
}

export default SplashScreen
