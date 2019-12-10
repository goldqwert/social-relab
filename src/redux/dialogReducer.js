
let initialState = {
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
}


const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SEND-MESSAGE':
            let newMessage = {
                id: 1,
                message: action.valueOfMessageArea
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        default: return state;
    }
}

export default dialogReducer;

export const sendMessage = (valueOfMessageArea) => ({ type: 'SEND-MESSAGE', valueOfMessageArea })
