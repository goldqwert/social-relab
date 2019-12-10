import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' placeholder='Enter your message' name='valueOfPostArea' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'DialogAddPostForm' })(AddPostForm);