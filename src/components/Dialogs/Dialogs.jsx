import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from './AddMessageForm/AddMessageForm'
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let sendMessage = () => {
        props.onSendMessage()
    }

    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.onUpdateChangeMessage(text)
    }


    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = state.messages.map((m) => <Message message={m.message} id={m.id} />)

    let valueOfMessageArea = state.newMessageText

    let submit = values => { console.log(values) }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageForm onSubmit={sendMessage}/>
        </div>
    )
}

export default Dialogs;




