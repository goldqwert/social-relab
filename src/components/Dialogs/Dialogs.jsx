import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreate, updateNewMessageCreate } from '../../redux/dialogReducer'



const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(addMessageActionCreate());
    }

    let onChangeMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageCreate(text));
    }


    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.state.messages.map((m) => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onChangeMessage} ref={newMessageElement} placeholder='Введите сообщение'></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;