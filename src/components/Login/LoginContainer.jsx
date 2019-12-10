import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import Login from './Login';
import { login } from '../../redux/authReducer';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { login }),
)(Login)
