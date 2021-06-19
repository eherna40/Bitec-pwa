import React, {useState} from 'react'
import { Container, Inner } from './styles.js'
import { motion } from 'framer-motion'
import Especifications from '../ProductScreen/Especifications/Especifications'
import BtnInfos from '../BtnInfos/index.jsx'
import Features from '../ProductScreen/Features/Features.jsx'

const ContentInfo = ({ especifications, features, accesories }) => {
    const [selected, setSelected] = useState(0)
    const [data, setData] = useState(especifications)

    const handleClick = (index) => {
        setSelected(index)

        switch (index) {
            case 0:
                setData(especifications)
                break;

            case 1:
                setData(features)
                break;

            case 2:
                setData(accesories)
                break;
        
            default:
                break;
        }
    }
    return (
        <Container as={motion.div} className="content-info tw-h-full tw-relative tw-overflow-auto "
            initial={{
                opacity: 0,
            }}

            animate={{

                opacity: 1,

            }}

            transition={{
                duration: .5
            }}

        >
            <BtnInfos selected={selected} handleClick={handleClick} />
            <Inner
                className="tw-h-full tw-absolute tw-w-full  tw-overflow-auto   tw-top-0  tw-p-10 tw-pt-36">
                {
                    selected === 0 ? <Especifications data={data} />
                        :
                        <Features data={data} selected={selected}/>
                }
            </Inner>
        </Container>
    )
}



export default ContentInfo
