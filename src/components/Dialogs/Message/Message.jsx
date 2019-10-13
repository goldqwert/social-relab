import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.message}>
            <textarea ref={newMessageElement} placeholder='Введите сообщение'></textarea>
            <button onClick={sendMessage}>Send message</button>
        </div>
    )
}

export default Message;