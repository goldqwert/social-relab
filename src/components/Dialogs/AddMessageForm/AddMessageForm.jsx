import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from '../../common/Validation/Validation';
import { Textarea } from '../../common/Validation/FormControls/FormControls'
import s from '../../Profile/MyPosts/MyPosts.module.css'

const maxLength50 = maxLength(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder='Enter your message'
                    name="valueOfMessageArea" validate={[required, maxLength50]} />
            </div>
            <div>
                <button className={s.send}>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'DialogAddMessageForm' })(AddMessageForm);