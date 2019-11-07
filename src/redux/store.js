import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"
import dialogReducer from "./dialogReducer"

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
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }

}
export default store;

window.store = store;

