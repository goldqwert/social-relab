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

    let messageData = [
        { id: 1, message: 'Hi.How are you?' },
        { id: 2, message: 'Hey' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Go play?' },
        { id: 5, message: 'I think' },
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItems name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItems name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItems name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItems name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItems name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id} />
                <Message message={messageData[1].message} id={messageData[1].id} />
                <Message message={messageData[2].message} id={messageData[2].id} />
                <Message message={messageData[3].message} id={messageData[3].id} />
                <Message message={messageData[4].message} id={messageData[4].id} />
            </div>
        </div >
    )
}

export default Dialogs;