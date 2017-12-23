import './ContactForm.css';

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Grid, Input, TextArea, Message } from 'semantic-ui-react'

const required = (value) => value ? undefined : 'is required'

function nameValidation(value) {
    if (value && !/^[a-zA-Z ]+$/.test(value)) {
        return 'is invalid'
    } else {
        return undefined
    }
}

function emailValidation(value) {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'is invalid'
    } else {
        return undefined
    }
}

function TextAreaFormField({
    input,
    label,
    loading,
    disabled,
    maxLength,
    meta: { touched, error }
}) {
    const handleOnChange = (param, data) => input.onChange(data.value)
    const style = {
        minHeight: 100,
        backgroundColor: touched && error ? '#fff6f6' : '#fff',
        borderColor: touched && error ? '#e0b4b4' : 'lightgray',
        color: touched && error ? '#9f3a38' : 'rgba(0,0,0,.87)'
    }
    return (
        <div className='form-textarea-field'>
            <TextArea
                autoHeight
                maxLength={maxLength}
                disabled={disabled}
                onChange={handleOnChange}
                style={style}
            />
            {touched && error
                ? <span className='contact-form-error'>* {`${label} ${error}`}</span>
                : <span>* {label}</span>
            }

        </div>
    )
}

function InputFormField({
    input,
    label,
    loading,
    disabled,
    maxLength,
    meta: { touched, error }
}) {
    const handleOnChange = (param, data) => input.onChange(data.value)
    return (
        <div className='form-input-field'>
            <Input
                placeholder={label}
                maxLength={maxLength}
                loading={loading}
                disabled={disabled}
                onChange={handleOnChange}
                error={touched && Boolean(error)}
            />
            {touched && error
                ? <span className='contact-form-error'>* {`${label} ${error}`}</span>
                : <span>* {label}</span>
            }
        </div>
    )
}

let ContactForm = props => {
    const { handleSubmit, loading, wasSentSuccessfully } = props
    let submitButtonColor = 'blue';

    if (loading) {
        submitButtonColor = 'orange'
    } else if (wasSentSuccessfully) {
        submitButtonColor = 'green'
    }

    return (
        <form className='contact-form' onSubmit={ handleSubmit }>
            <Grid textAlign='center' padded>
                <h3 className='contact-form-title'>Contact Jordan</h3>
                <Grid.Row>
                    <Field
                        name="name"
                        label='Name'
                        maxLength={75}
                        disabled={loading || wasSentSuccessfully}
                        component={InputFormField}
                        loading={loading}
                        validate={[ required, nameValidation ]}
                    />
                    <Field
                        name="email"
                        label='Email'
                        maxLength={254}
                        disabled={loading || wasSentSuccessfully}
                        component={InputFormField}
                        loading={loading}
                        validate={[ required, emailValidation]}
                    />
                </Grid.Row>
                <Grid.Row>
                    <Field
                        name="message"
                        disabled={loading || wasSentSuccessfully}
                        label='Message'
                        maxLength={6000}
                        component={TextAreaFormField}
                        loading={loading}
                        validate={[ required]}
                    />
                </Grid.Row>
                { wasSentSuccessfully
                    ? (
                        <Grid.Row>
                            <Message className='form-message-success' positive>
                                <p>Jordan will be notified shortly.</p>
                            </Message>
                        </Grid.Row>
                    )
                    : null
                }
                <Grid.Row>
                    <Button
                        content={wasSentSuccessfully ? 'Sent!' : 'Submit'}
                        color={submitButtonColor}
                        disabled={loading || wasSentSuccessfully}
                        loading={loading}
                    />
                </Grid.Row>
            </Grid>
        </form>
    )
}

export default ContactForm = reduxForm({ form: 'contact' })(ContactForm)