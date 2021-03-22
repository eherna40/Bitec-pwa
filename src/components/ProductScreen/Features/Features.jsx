import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'
import Title3 from '../Title'
import { Overload } from './style'

const Features = ({ data, title, info }) => {
    return (
        <>
            <Overload />
            <Title3 title={title} />

            <div className="Accesories tw-relative tw-h-full tw-overflow-auto tw-p-5 tw-flex " style={{ 
                width: 'calc(100vw - 70%)'
             }}>
                {
                    data.map(i => {
                        return <div className="tw-mx-5" style={{ 
                            minWidth: 120
                         }}>
                            <div style={{ height: 32 }}>
                                <Paragraphs uppercase family='extrabold' size='xs' className="tw-text-grey-400 tw-mb-2">{info === 1 ? i.name : i.name + ' Unidad/es'}</Paragraphs>
                            </div>
                            <div>
                                <Paragraphs uppercase size='sm' className="tw-text-black-700" family='universe' italic>{i.value}</Paragraphs>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

Features.propTypes = {
    data: PropTypes.array
}

Features.defaultProps = {
    data: []
}

export default Features
