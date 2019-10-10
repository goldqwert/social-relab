import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.messageData.map((m) => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div >
    )
}

export default Dialogs;