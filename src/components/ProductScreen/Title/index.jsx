import React from 'react'
import Paragraphs from '../../Paragraphs/Paragraphs.jsx'
import {Container} from './style.js'
const Title = props => {
    return (
        <Container className="tw-absolute " >
            <Paragraphs className="tw-tracking-widest" uppercase family='universe' size='6xl'>
                {props.title}
                </Paragraphs>
        </Container>
    )
}


export default Title
