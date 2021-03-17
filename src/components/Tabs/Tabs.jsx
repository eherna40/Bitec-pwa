import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'
import Paragraphs from '../Paragraphs/Paragraphs'

const Tabs = ({ categories, onPress }) => {
    return (
        <Container className="Tabs tw-w-full tw-h-20">
            <div className="tw-border-b tw-flex tw-overflow-auto">
                {
                    categories.map(i => {
                        return <div onClick={() => onPress(i)} className="tw-text-primary tw-p-7 tw-whitespace-nowrap tw-cursor-pointer">
                            <Paragraphs size='xl' family='universe' uppercase>{i.name}</Paragraphs>
                        </div>
                    })
                }
            </div>
        </Container>
    )
}

Tabs.propTypes = {
    categories: PropTypes.array,
    onPress: PropTypes.func
}

Tabs.defaultProps = {
    categories: []
}

export default Tabs
