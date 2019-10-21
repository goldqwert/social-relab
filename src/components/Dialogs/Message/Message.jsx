import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {

    return (
        <div>
            <p>{props.message}</p>
        </div>
    )
}


export default Message;