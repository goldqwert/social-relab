import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




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


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onChangeMessage} value={valueOfMessageArea} placeholder='Введите сообщение'></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;