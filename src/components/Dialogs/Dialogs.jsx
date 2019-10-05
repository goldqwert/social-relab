import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItems = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Veronika' },
        { id: 2, name: 'Fill' },
        { id: 3, name: 'Artem' },
        { id: 4, name: 'Sergey' },
        { id: 5, name: 'Vlad' },
        { id: 6, name: 'Nikita' }
    ]

    let dialogsElements = dialogsData.map((d) => <DialogItems name={d.name} id={d.id} />)

    let messageData = [
        { id: 1, message: 'Hi.How are you?' },
        { id: 2, message: 'Hey' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Go play?' },
        { id: 5, message: 'I think' },
    ]

    let messagesElements = messageData.map((m) => <Message message={m.message} id={m.id} />)

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