let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'The my first post', likesCount: 22 },
            { id: 2, message: 'Hello all', likesCount: 1 },
            { id: 3, message: 'Add me to friend', likesCount: 2 }
        ]
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
        ]
    },
    sidebar: {
        friends: [
            { id: 1, friend: 'Sasha' },
            { id: 2, friend: 'Andrew' },
            { id: 3, friend: 'Sveta' },
        ]
    }
}

export default state;