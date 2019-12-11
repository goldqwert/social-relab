import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/Validation/FormControls/FormControls'
import { required } from '../common/Validation/Validation'

let LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>Login</div>
                <Field placeholder='Login' name='login' component={Input} validate={required} />
                <Field placeholder='Password' name='password' component={Input} validate={required} />
                <Field type='checkbox' name='rememberMe' component={Input} /> remember me
                <button>Submit</button>
            </form>
        </div>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    let submit = values => { }

    return (
        <div>
            <LoginForm onSubmit={submit} />
        </div>
    )
}

export default Login;