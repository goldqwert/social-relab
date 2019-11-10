import React from 'react';
import { addMessageActionCreater, updateNewMessageCreater } from '../../redux/dialogReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;