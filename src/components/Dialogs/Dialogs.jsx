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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name='Veronika' id='1' />
                <DialogItems name='Fill' id='2' />
                <DialogItems name='Artem' id='3' />
                <DialogItems name='Sergey' id='4' />
                <DialogItems name='Vlad' id='5' />
                <DialogItems name='Nikita' id='6' />
            </div>
            <div className={s.messages}>
                <Message message='Hi. How are you?' />
                <Message message='Hey' />
                <Message message='Yo' />
                <Message message='Go play' />
                <Message message='I think' />
            </div>
        </div >
    )
}

export default Dialogs;