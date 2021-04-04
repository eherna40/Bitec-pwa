import React, { useState } from 'react'
import { ZendeskAPI } from "react-zendesk";
import { useIdleTimer } from 'react-idle-timer'

import Commnets from '../../../assets/img/comments.svg'
import Paragraphs from '../../Paragraphs/Paragraphs';
import Zendesk from "react-zendesk";
import { useHistory } from 'react-router';
const ZENDESK_KEY = "baa783a3-6b63-473c-80cc-239618e0b981";

const setting = {
    color: {
        theme: "#e85900"
    },
    chat: {
        hide: true
    },
    launcher: {
        chatLabel: {
            "en-US": "Need Help"
        }
    },
    webWidget: {
        offset: { horizontal: '0px', vertical: '0px', zIndex: 999 },
        contactForm: {
            suppress: true
        },
        helpCenter: {
            suppress: true
        },
        talk: {
            suppress: true
        },
        answerBot: {
            suppress: true
        },
        hideWhenOffline: true
    },
    contactForm: {
        fields: [
            { id: "description", prefill: { "*": "Worx" } }
        ]
    }
};



const BtnChat = () => {






    const history = useHistory()
    const [active, setActive] = useState(false)
    const onLoadZendesk = () => {
        ZendeskAPI('webWidget:on', 'chat:status', isActive)
        ZendeskAPI('webWidget:on', 'chat:start', () => reset())
    }
    const clearChat = (e)=> {
        ZendeskAPI('webWidget', 'clear')
        ZendeskAPI('webWidget', 'chat:end')
        ZendeskAPI('webWidget', 'close')
        pause()
    }

    const { pause, reset } = useIdleTimer({
        timeout: 180000,
        onIdle: clearChat,
    })
    const isActive = (e) => {
        if (e === 'online') {
            setActive(true)
            ZendeskAPI('webWidget', 'show')
        }
        else {
            ZendeskAPI('webWidget', 'hide')
            setActive(false)
        }

    }
    const onPress = () => {
        if (!active) {
            history.push('/contact')
            ZendeskAPI('webWidget', 'hide')

        }
        else {

            ZendeskAPI('webWidget', 'show')
        }
    }

    if (history.location.pathname === '/contact') {
        return null
    }

    return (
        <>
            {
                !active && <div onClick={onPress} className="tw-fixed tw-bottom-10 tw-right-10 tw-z-50 tw-flex tw-bg-primary tw-px-4 tw-py-2 tw-rounded-full tw-cursor-pointer">
                    <img alt='preguntanos' src={Commnets} width={20} />
                    <Paragraphs family='universe' className="tw-ml-3">
                        PREGUNTANOS
            </Paragraphs>
                </div>



            }
            <Zendesk defer zendeskKey={ZENDESK_KEY} {...setting} onLoaded={onLoadZendesk} />


        </>
    )
}

export default BtnChat
