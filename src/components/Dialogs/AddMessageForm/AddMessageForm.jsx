import React from 'react';
import { Field, reduxForm } from "redux-form";
import { required } from '../../common/Validation/Validation';
import { Textarea } from '../../common/Validation/FormControls/FormControls'

const AddMessageForm = (props) => {

    // const maxLength = max => value => {
    //     return value && value.length > max ? `Must be ${max} characters or less` : undefined
    // }
    const maxLength = (maxLength) => (value) => {
        if (value && value.length > maxLength) { return `Max length is ${maxLength} symbols` } return undefined
    }

    const maxLength15 = maxLength(15)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder='Enter your message'
                    name="valueOfMessageArea" validate={[required]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'DialogAddMessageForm' })(AddMessageForm);