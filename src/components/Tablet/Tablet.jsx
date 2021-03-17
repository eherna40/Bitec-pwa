import React from 'react'
import PropTypes from 'prop-types'
import { Button, Container, Round, Rounded } from './styles'
import Paragraphs from '../Paragraphs/Paragraphs'

const Tablet = ({
    code,
    store,
    campaings,
    onPress,
    id,
    idx
}) => {
    return (
        <Container idx={idx} onClick={() => onPress(id)} className="Tablet tw-bg-black-800 tw-p-3 tw-flex tw-text-white tw-m-5 tw-cursor-pointer">
            <Button className="tw-flex tw-items-center tw-justify-center tw-h-full tw-flex-col">
                <Round />
                <Rounded />
                <Round />
            </Button>
            <div className="tw-p-5">
                <Paragraphs size='sm' family='black'>
                    {code}
                </Paragraphs>
                <Paragraphs size={'xs'} italic className="store">{store}</Paragraphs>
                <div className="tw-flex tw-flex-wrap tw-mt-2">
                {
                        campaings.map((i, index) => 

                        <div className="tw-mr-2" key={index}><Paragraphs size={'xs'}>{i.campaing}</Paragraphs></div>
                    )
                }
                </div>
            </div>
        </Container>
    )
}


Tablet.propTypes = {
    code: PropTypes.string,
    store: PropTypes.string,
    campaings: PropTypes.array,
    onPress: PropTypes.func
}
export default Tablet
