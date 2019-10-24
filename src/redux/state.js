
let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'The my first post', likesCount: 22 },
                { id: 2, message: 'Hello all', likesCount: 1 },
                { id: 3, message: 'Add me to friend', likesCount: 2 }
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Veronika' },
                { id: 2, name: 'Fill' },
                { id: 3, name: 'Artem' },
                { id: 4, name: 'Sergey' },
                { id: 5, name: 'Vlad' },
                { id: 6, name: 'Nikita' }
            ],

            messages: [
                { id: 1, message: 'Hi.How are you?' },
                { id: 2, message: 'Hey' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Go play?' },
                { id: 5, message: 'I think' },
            ],
            newMessageText: ''
        },

        sidebar: {
            friends: [
                { id: 1, friend: 'Sasha' },
                { id: 2, friend: 'Andrew' },
                { id: 3, friend: 'Sveta' },
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0

        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    sendMessage() {
        let newMessage = {
            id: 1,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessage(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store;

window.store = store;