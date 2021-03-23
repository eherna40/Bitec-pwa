
import React from 'react'
import PropTypes from 'prop-types'
import { Textarea, Container } from './styles'
import { useForm } from "react-hook-form";
import TextInput from '../../TextInput';
import Paragraphs from '../../Paragraphs/Paragraphs';

const Form = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data)=> {
        console.log(data)
    }

    return (
        <Container onSubmit={handleSubmit(onSubmit)} className="tw-h-full">
            <div className="tw-w-full">
                <label class="tw-mb-3 tw-block tw-italic tw-text-white">Deje su mensaje</label>
                <Textarea ref={register} autoFocus={true} class="mod-textarea motionIn" name="message"></Textarea>
            </div>
            <div className="tw-flex">
                <div className="tw-w-6/12">
                  <TextInput 
                  label={'Numero de telefono'}
                    register={register}
                    name={'phone'}
                    placeholder='655 55 55 55'
                    
                  />
                </div>
                <div className="tw-w-6/12">
                    <TextInput
                        error={errors.email && errors.email.message}
                        label={'Email de contacto'}
                        register={register({
                            required: {
                                value: true,
                                message: 'Necesitamos al menos tu email'
                            }
                        })}
                        name={'email'}
                        placeholder='@'
                        type='email'

                    />
                </div>
            </div>
        <button type='submit' className="tw-bg-primary tw-fixed tw-right-20 tw-bottom-20 tw-px-8 tw-py-2 tw-rounded-full" style={{ 
            outline: 'none'
         }}>
            <Paragraphs size='xl' family='universe'>Enviar</Paragraphs>
        </button>
        </Container>
    )
}



export default Form
