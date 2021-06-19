import React from 'react'
import { Input, Label } from './styles'

const TextInput = ({
    label,
    register,
    name,
    placeholder,
    error,
    onFocus,
    onBlur
}) => {
    return (
        <div className="TextInput">
            <Label class="tw-mb-3 tw-block tw-text-white">{label}</Label>
            <Input
                ref={register}
                onFocus={onFocus}
                onBlur={onBlur}
                type='phone'
                autoComplete='off'
                autoCapitalize={false}
                autoCorrect={false}
                class="tw-ouline-none tw-border-0"
                style={{
                    outline: 'none'
                }}
                placeholder={placeholder}
                name={name} />
                <small className="tw-text-alert tw-block">
                {error}
                </small>
        </div>
    )
}

TextInput.propTypes = {

}

export default TextInput
