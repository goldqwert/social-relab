import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>Login</div>
                <Field placeholder='Login' name='login' component='input' />
                <Field placeholder='Password' name='password' component='input' />
                <Field type='checkbox' name='rememberMe' component='input' /> remember me
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