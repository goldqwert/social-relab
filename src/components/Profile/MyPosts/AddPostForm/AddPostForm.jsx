import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/Validation/FormControls/FormControls';
import { required, maxLength } from '../../../common/Validation/Validation';

const maxLength50 = maxLength(50)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder='Enter your message'
                    validate={[required, maxLength50]} name='valueOfPostArea' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'DialogAddPostForm' })(AddPostForm);