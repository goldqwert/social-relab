import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreater, updateNewMessageCreater } from '../../redux/dialogReducer'
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessage = () => {
        props.store.dispatch(addMessageActionCreater());
    }

    let onUpdateChangeMessage = (text) => {
        props.store.dispatch(updateNewMessageCreater(text));
    }


    return (
        <div>
            <Dialogs onSendMessage={onSendMessage} onUpdateChangeMessage={onUpdateChangeMessage} dialogsPage={state} />
        </div>
    )
}

export default DialogsContainer;