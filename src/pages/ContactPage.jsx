import React from 'react'
import { BoxInfo } from '../components/BoxInfo'
import Form from '../components/Contact/Form'
import Logo from '../components/Logo/Logo'
import Paragraphs from '../components/Paragraphs/Paragraphs'

const ContactPage = props => {
    return (
        <div className="tw-flex tw-flex-col tw-h-screen tw-bg-black-800">
            <div className="tw-flex tw-justify-center tw-items-center" style={{ height: 80 }}>
                <Logo size={'small'} mode='light'/>
            </div>
            <div style={{ height: 'calc(100% - 80px)' }} className="tw-flex" >
                <div className="tw-h-full tw-w-7/12">
                    <Form />
                </div>
                    <div className="box-content-info tw-w-5/12 tw-items-center  tw-h-full tw-pt-20 tw-pl-10 ">

                        <BoxInfo />
                        
                    </div>
            </div>
        </div>
    )
}


export default ContactPage
