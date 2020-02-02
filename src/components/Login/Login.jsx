import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/Validation/FormControls/FormControls';
import { required } from '../common/Validation/Validation';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from './Login.module.css';

let LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <div className={s.wrapper}>
            <div className={s.word}>
                <p>Чтобы посмотреть и протестировать приложение введите данные тестового акканута:</p>
                <p>Email: goldyukol12@gmail.com</p>
                <p>Password: yura1998Q</p>
            </div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className={s.error}>{props.error && <div className={s.summaryError}>{props.error}</div>}</div>
                <Field placeholder='Email' name='email' component={Input} validate={[required]} />
                <Field placeholder='Password' name='password' component={Input} validate={[required]} type='password' />
                <button className={s.btn}>Submit</button>
                <div>{props.captchaUrl && <img src={props.captchaUrl} alt='captcha' />}</div>
                <div>{props.captchaUrl && <Field placeholder='Write symbols with image' name='captcha' component={Input} validate={[required]} />}</div>
            </form>
        </div>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    let onSubmit = (values) => {
        props.login(values.email, values.password, values.rememberMe, values.captcha)
    }
    if (props.isAuth) {
        return <Redirect to='/profile' />
    }
    return (
        <div>
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login)


