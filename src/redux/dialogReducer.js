const dialogReducer = (state, action) => {

    switch (action.type) {

        case 'SEND-MESSAGE':
            let newMessage = {
                id: 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case 'UPDATE-NEW-MESSAGE':
            state.newMessageText = action.newText;
            return state;
        default: return state;
    }

}

export default dialogReducer;


export const addMessageActionCreate = () => {
    return {
        type: 'SEND-MESSAGE'
    }
}

export const updateNewMessageCreate = (text) => {
    return {
        type: 'UPDATE-NEW-MESSAGE', newText: text
    }
}