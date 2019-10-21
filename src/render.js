import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updateNewPostText, sendMessage, updateNewMessage } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import './index';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} sendMessage={sendMessage} updateNewMessage={updateNewMessage} />
        </BrowserRouter>, document.getElementById('root'))
}
