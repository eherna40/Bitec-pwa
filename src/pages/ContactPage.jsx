import React, { useState, useRef } from "react";
import { BoxInfo } from "../components/BoxInfo";
import { BtnBack } from "../components/BtnBack/BtnBack";
import Form from "../components/Contact/Form";
import Logo from "../components/Logo/Logo";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { Container, Textarea } from "../components/Contact/Form/styles";
import TextInput from "../components/TextInput";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { sendM } from "../infraestructure/api/API";
import Paragraphs from "../components/Paragraphs/Paragraphs";

const ContactPage = (props) => {
  const keyboard = useRef();

  const [inputFocus, setInputFocus] = useState(null);
  const history = useHistory();
  const [layout, setLayout] = useState("default");
  const { register, handleSubmit, errors, setValue } = useForm();
  const [show, setshow] = useState(false);
  const onSubmit = async (data) => {
    await sendM(data.name, data.email, data.phone);
    setshow(true);
    setTimeout(() => {
      history.goBack();
    }, 2000);
  };
  const onChange = (val) => {
    console.log(inputFocus, val);
    setValue(inputFocus, val);
  };

  const onKeyPress = (btn) => {
    if (btn === "{shift}") {
      setLayout(layout === "default" ? "shift" : "default");
    }
  };
  return (
    <div className="tw-flex tw-flex-1 tw-flex-col tw-overflow-hidden">
      <div
        className="tw-flex tw-flex-col tw-bg-black-800 tw-overflow-y-scroll tw-relative"
        style={{ height: `calc(100vh - 230px)` }}
      >
        <BtnBack />
        <div
          className="tw-flex tw-justify-center tw-items-center tw-py-3"
          // style={{ height: 80 }}
        >
          <Logo size={"medium"} mode="light" />
        </div>
        <div className="tw-flex">
          <div className="tw-h-full tw-w-7/12">
            <Container onSubmit={handleSubmit(onSubmit)} className="tw-h-full">
              <Paragraphs family="univers" className="tw-text-white" size="3xl">
                Si necesitas más información déjanos tus datos y nos pondremos
                en contacto contigo:
              </Paragraphs>
              <div className="tw-w-full tw-mt-7">
                <Paragraphs
                  size="lg"
                  className="tw-block tw-italic tw-text-white"
                >
                  Deje su mensaje
                </Paragraphs>
                <Textarea
                  autoCapitalize={true}
                  placeholder="Hola, buenos días"
                  ref={register}
                  autoFocus={true}
                  class="mod-textarea motionIn"
                  name="name"
                  onFocus={(el) => setInputFocus(el.target.name)}
                />
              </div>
              <div className="tw-flex">
                <div className="tw-w-6/12">
                  <TextInput
                    label={"Numero de telefono"}
                    register={register}
                    name={"phone"}
                    placeholder="655 55 55 55"
                    onFocus={(el) => setInputFocus(el.target.name)}
                  />
                </div>
                <div className="tw-w-6/12">
                  <TextInput
                    error={errors.email && errors.email.message}
                    label={"Email de contacto"}
                    register={register({
                      required: {
                        value: true,
                        message: "Necesitamos al menos tu email",
                      },
                    })}
                    onFocus={(el) => setInputFocus(el.target.name)}
                    name={"email"}
                    placeholder="@"
                    type="email"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="tw-bg-primary tw-absolute tw-right-20 tw-bottom-20 tw-px-8 tw-py-2 tw-rounded-full"
                style={{
                  outline: "none",
                }}
              >
                <Paragraphs size="xl" family="universe">
                  Enviar
                </Paragraphs>
              </button>
              {show && (
                <div className="tw-fixed tw-bg-black-600 tw-h-16 tw-w-80 tw-right-10 tw-bottom-10 tw-rounded-sm tw-p-2 tw-flex tw-items-center tw-justify-center">
                  <Paragraphs className="tw-italic tw-text-white">
                    Mesaje enviado correctamente
                  </Paragraphs>
                </div>
              )}
            </Container>
          </div>
          <div className="box-content-info tw-w-5/12 tw-items-center  tw-h-full tw-pt-20 tw-pl-10 ">
            <BoxInfo />
          </div>
        </div>
      </div>
      <div className="" style={{ height: 230 }}>
        <Keyboard
          inputName={inputFocus}
          onChange={onChange}
          layoutName={layout}
          keyboardRef={(r) => (keyboard.current = r)}
          onKeyPress={onKeyPress}
          display={{
            "{bksp}": "Retroceder",
            "{enter}": " ",
            "{shift}": "Shift",
            "{tab}": "Tab",
            "{lock}": " ",
            "{space}": "Espacio"
          }}
        />
      </div>
    </div>
  );
};

export default ContactPage;
