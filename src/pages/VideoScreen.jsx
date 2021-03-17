import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout/Layout'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom'
import FloatInfo from '../components/FloatInfo/FloatInfo'

const VideoScreen = () => {
    const history = useHistory()
    const { url, name, description, description_short } = history.location.state

    return (
        <Layout className="tw-bg-black-900" padding={true}>
            <div className="tw-h-full tw-w-full tw-relative" onClick={() => history.goBack()}>
                <FloatInfo 
                    name={name}
                    description_short={description_short}
                />
                <ReactPlayer url={url}
                    playing={true}
                    width={'100%'}
                    height='100%'
                    controls={false}
                    onEnded={() => history.goBack()}
                />

            </div>
          
        </Layout>
    )
}

VideoScreen.propTypes = {

}

export default VideoScreen
