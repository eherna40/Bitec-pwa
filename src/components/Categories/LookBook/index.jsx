import React from 'react'
import Logo from '../../Logo/Logo'
import Paragraphs from '../../Paragraphs/Paragraphs'
import StripAnimation from '../../StripAnimation'
import { Content } from './styles'

const Lookbook = props => {
    return (
        <div>
            <StripAnimation onAnimationComplete={null} className="tw-mb-5">
                <Logo mode='light' size={'small'} />
            </StripAnimation>
            
            <Content className="lookbook-content tw-relative">
                <StripAnimation onAnimationComplete={null}>
                    <Paragraphs family='univers' size='4xl' className="tw-text-white">LOOKBOOK</Paragraphs>
                </StripAnimation>
                <StripAnimation onAnimationComplete={null}>
                    <div style={{ marginTop: -40 }}>
                    <Paragraphs
                        family='universe' size='9xl' className="tw-text-white tw-text-opacity-10 tw-relative">2021</Paragraphs>
                    </div>
                </StripAnimation>
              
            </Content>
        </div>
    )
}

Lookbook.propTypes = {

}

export default Lookbook
