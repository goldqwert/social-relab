import React from 'react';
import { Field, reduxForm } from "redux-form";
import { required, maxLength } from '../../common/Validation/Validation';
import { Textarea } from '../../common/Validation/FormControls/FormControls'

const maxLength50 = maxLength(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder='Enter your message'
                    name="valueOfMessageArea" validate={[required, maxLength50]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'DialogAddMessageForm' })(AddMessageForm);