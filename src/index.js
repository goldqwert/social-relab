import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    { id: 1, message: 'The my first post', likesCount: 22 },
    { id: 2, message: 'Hello all', likesCount: 1 },
    { id: 3, message: 'Add me to friend', likesCount: 2 }
]

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

ReactDOM.render(<App postData={postData} dialogsData={dialogsData} messageData={messageData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
