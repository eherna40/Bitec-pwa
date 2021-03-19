import React from 'react'
import Logo from '../../Logo/Logo'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Content } from './styles'

const Lookbook = props => {
    return (
        <div>
            <Logo mode='light' size={'small'} />
            <Content className="lookbook-content tw-relative">
                <Paragraphs family='univers' size='4xl' className="tw-text-white">LOOKBOOK</Paragraphs>
                <Paragraphs
                    family='universe' size='9xl' className="tw-text-white tw-text-opacity-10 tw-relative tw-bottom-10">2021</Paragraphs>
            </Content>
        </div>
    )
}

Lookbook.propTypes = {

}

export default Lookbook
