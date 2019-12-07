import React from 'react';
import { addMessageActionCreater, updateNewMessageCreater } from '../../redux/dialogReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux'


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(addMessageActionCreater());
        },
        onUpdateChangeMessage: (text) => {
            dispatch(updateNewMessageCreater(text));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
