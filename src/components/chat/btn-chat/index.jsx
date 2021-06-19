import React, { useState, useRef } from "react";
import { useIdleTimer } from "react-idle-timer";

import Commnets from "../../../assets/img/comments.svg";
import Paragraphs from "../../Paragraphs/Paragraphs";
import Zendesk, { ZendeskAPI } from "react-zendesk";
import { useHistory } from "react-router";
import { useNetworkState } from "react-use";
import Keyboard from "react-simple-keyboard";

const ZENDESK_KEY =
  process.env.NODE_ENV === "development"
    ? "9207f350-8859-42cd-8262-9f2395397d77"
    : "baa783a3-6b63-473c-80cc-239618e0b981";
const setting = {
  color: {
    theme: "#e85900",
  },
  chat: {
    hide: false,
    hideWhenOffline: true,
  },
  webWidget: {
    offset: { horizontal: "0px", vertical: "0px", zIndex: 999 },
    contactForm: {
      suppress: true,
    },
    contactOptions: {
      enabled: false,
    },
    helpCenter: {
      suppress: true,
    },
    talk: {
      suppress: true,
    },
    answerBot: {
      suppress: true,
    },
    navigation: {
      popoutButton: {
        enabled: false,
      },
    },
  },
  contactForm: {
    fields: [{ id: "description", prefill: { "*": "Worx" } }],
  },
};

const BtnChat = () => {
  const chat = useRef(null);
  const { online } = useNetworkState();
  const [ready, setReady] = useState(false);
  const history = useHistory();
  const [active, setActive] = useState(false);
  const [layout, setLayout] = useState("default");
      const keyboard = useRef();

  const [chatBox, setChatBox] = useState('')
  const onLoadZendesk = () => {
    ZendeskAPI("webWidget:on", "chat:status", isActive);
    ZendeskAPI("webWidget:on", "chat:start", () => reset());
    ZendeskAPI("webWidget:on", "userEvent", (e) => {
      if (e.action === "Web Widget Minimised") {
        ZendeskAPI("webWidget", "hide");
      }
      
      if (e.action === "Web Widget Opened") {
            ZendeskAPI("webWidget", "clear");
        setReady(true);
      }

      if (e.action === "Web Widget Minimised") {
                      ZendeskAPI("webWidget", "reset");

        setReady(false);
      }
    });

    ZendeskAPI("webWidget", "close");
  };
  const clearChat = (e) => {
    ZendeskAPI("webWidget", "clear");
    ZendeskAPI("webWidget", "chat:end");
    ZendeskAPI("webWidget", "close");
    pause();
  };

  const { pause, reset } = useIdleTimer({
    timeout: 180000,
    onIdle: clearChat,
  });
  const isActive = (e) => {
    if (e === "online") {
      setActive(true);
      ZendeskAPI("webWidget", "hide");
      ZendeskAPI("webWidget", "clear");
    } else {
      ZendeskAPI("webWidget", "hide");
      ZendeskAPI("webWidget", "clear");
    ZendeskAPI("webWidget", "reset");
      setActive(false);
    }
  };
  const onPress = () => {
    if (!active) {
      history.push("/contact");
      ZendeskAPI("webWidget", "hide");
    } else {
      ZendeskAPI("webWidget", "show");
      ZendeskAPI("webWidget", "open");
    }
  };

  if (history.location.pathname === "/contact") {
    return null;
  }
  const onKeyPress = (btn) => {
      console.log(btn)
    if (btn === "{shift}") {
      setLayout(layout === "default" ? "shift" : "default");
    }
    if(btn==='{enter}'){
        ZendeskAPI('webWidget', 'chat:send', chatBox)
        // setChatBox('')
        keyboard.current.clearInput()
    }
  };
  return (
    <>
      {!active && (
        <div
          onClick={onPress}
          className="tw-fixed tw-bottom-10 tw-right-10 tw-z-50 tw-flex tw-bg-primary tw-px-4 tw-py-2 tw-rounded-full tw-cursor-pointer"
        >
          <img alt="preguntanos" src={Commnets} width={20} />
          <Paragraphs family="universe" className="tw-ml-3">
            PREGÚNTANOS
          </Paragraphs>
        </div>
      )}
      {online && (
        <>
          {ready && (
            <textarea
              value={chatBox}
              name="chatBox"
              className="tw-bg-red"
              placeholder="Usar teclado virtual..."
              style={{
                position: "absolute",
                bottom: 62,
                zIndex: 999999999999,
                background: "white",
                right: 37,
                width: 300,
                height: 77,
              }}
            />
          )}
          <Zendesk
            ref={chat}
            close
            defer
            zendeskKey={ZENDESK_KEY}
            {...setting}
            onLoaded={onLoadZendesk}
          />
          {active && (
            <>
              <div
                onClick={onPress}
                className="tw-fixed tw-bottom-10 tw-right-10 tw-z-50 tw-flex tw-bg-primary tw-px-4 tw-py-2 tw-rounded-full tw-cursor-pointer"
              >
                <img alt="preguntanos" src={Commnets} width={20} />
                <Paragraphs family="universe" className="tw-ml-3">
                  CHAT ONLINE
                </Paragraphs>
              </div>
              {ready && (
                <div
                  className="tw-fixed tw-bg-white tw-bg-opacity-90 tw-h-screen tw-w-screen"
                  style={{ zIndex: 99 }}
                >
                  <Keyboard
                    keyboardRef={(r) => (keyboard.current = r)}
                    onKeyPress={onKeyPress}
                    inputName={"chatBox"}
                    onChange={(e) => setChatBox(e)}
                    layoutName={layout} // keyboardRef={(r) => (keyboard.current = r)}
                    // onKeyPress={onKeyPress}
                    display={{
                      "{bksp}": "Retroceder",
                      "{enter}": "Enviar",
                      "{shift}": "Shift",
                      "{tab}": "Tab",
                      "{lock}": " ",
                      "{space}": "Espacio",
                    }}
                  />
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default BtnChat;
