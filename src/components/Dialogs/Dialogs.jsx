import React from 'react'
import s from './Dialogs.module.css'
import { Redirect } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import AddMessageForm from './AddMessageForm/AddMessageForm'

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = state.messages.map((m) => <Message message={m.message} id={m.id} />)

    if (!props.isAuth) return <Redirect to={"/login"} />;

    let onSendMessage = (value) => {
        props.sendMessage(value.valueOfMessageArea)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageForm onSubmit={onSendMessage} />
        </div>
    )
}

export default Dialogs;




