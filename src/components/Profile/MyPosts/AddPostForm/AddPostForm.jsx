import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/Validation/FormControls/FormControls';
import { required, maxLength } from '../../../common/Validation/Validation';
import s from '../MyPosts.module.css'

const maxLength1000 = maxLength(1000)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder='Enter your message'
                    validate={[required, maxLength1000]} name='valueOfPostArea' />
            </div>
            <div>
                <button className={s.send}>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'DialogAddPostForm' })(AddPostForm);