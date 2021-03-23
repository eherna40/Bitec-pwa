import React from 'react'
import PropTypes from 'prop-types'
import { Input, Label } from './styles'

const TextArea = ({
    label,
    register,
    name,
    placeholder
}) => {
    return (
        <div className="TextInput">
            <Label class="tw-mb-3 tw-block">{label}</Label>
            <Input
                ref={register}
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
        </div>
    )
}


export default TextArea
