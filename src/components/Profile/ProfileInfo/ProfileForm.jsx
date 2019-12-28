import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileContacts from './ProfileContacts';
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/Validation/FormControls/FormControls'

const ProfileForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div><button>save</button></div>
        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>
        }
        <div>fullName: <Field name='fullName' component={Input} /></div>
        <div>lookingForAJob: <Field name='lookingForAJob' component={Input} type='checkbox' /></div>
        <div>
            <b>My professional skills</b>: <Field name='LookingForAJobDescription' component={Textarea} />
        </div>
        <div>
            <b>About me</b>: <Field name='aboutMe' component={Textarea} />
        </div>
        <b>Contacts:</b>{Object.keys(props.profile.contacts).map(el => {
            return <div>{el}: <Field name={'contacts.' + el} component={Input} /></div>
        })}
    </form>)
}

export default reduxForm({
    form: 'profile-form'
})(ProfileForm)
