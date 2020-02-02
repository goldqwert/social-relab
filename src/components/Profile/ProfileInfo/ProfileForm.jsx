import React from 'react';
import s from './ProfileInfo.module.css';
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/Validation/FormControls/FormControls'

const ProfileForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>

        {props.error && <div className={s.error}>
            {props.error}
        </div>
        }
        <div className={s.info}>
            <b>Full Name:</b> <Field name='fullName' component={Input} className={s.input} />
        </div>
        <div className={s.info}>
            <b>lookingForAJob:</b> <Field name='lookingForAJob' component={Input} type='checkbox' />
        </div>
        <div className={s.info}>
            <b >Looking for a job description:</b> <Field name='LookingForAJobDescription' component={Textarea} />
        </div>
        <div className={s.info}>
            <b>About me:</b> <Field name='aboutMe' component={Textarea} />
        </div>
        <div className={s.contacts}>
            <b>Contacts:</b>{Object.keys(props.profile.contacts).map(el => {
                return <div>{el}: <Field name={'contacts.' + el} component={Input} className={s.input} key={el} /></div>
            })}
            <div><button className={s.save}>save</button></div>
        </div>
    </form>)
}

export default reduxForm({
    form: 'profile-form'
})(ProfileForm)
