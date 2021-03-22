import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom'
import FloatInfo from '../components/FloatInfo/FloatInfo'
import { motion } from 'framer-motion'

const VideoScreen = () => {
    const history = useHistory()
    const [videos, setvideos] = useState(false)
    useEffect(() => {
        if (history.location.state) {
            setvideos({
                ...history.location.state
            })
        }
        else {
            history.goBack()
        }
    }, [])


    return (
        <Layout className="tw-bg-black-900" padding={true}>
            {
                videos && <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 1
                    }}
                    className="tw-h-full tw-w-full tw-relative" onClick={() => history.goBack()}>
                    <FloatInfo
                        name={videos.name}
                        description_short={videos.description_short}
                    />
                    <ReactPlayer url={videos.url}
                        playing={true}
                        width={'100%'}
                        height='100%'
                        controls={false}
                        onEnded={() => history.goBack()}
                    />

                </motion.div>
            }
        </Layout>
    )
}
export default VideoScreen
