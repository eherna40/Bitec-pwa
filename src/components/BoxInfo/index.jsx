import React from 'react'
import Paragraphs from '../Paragraphs/Paragraphs'

export const BoxInfo = () => {
    return (
        <div className="BoxInfo">
            <Paragraphs className="tw-text-white tw-italic">
                Nuestro email
                        </Paragraphs>
            <Paragraphs family='univers' size='4xl' className="tw-text-white">
                espana@positecgroup.com
                        </Paragraphs>
        </div>
    )
}
