const SEND_MESSAGE = 'Social_Relab/DialogReducer/SEND_MESSAGE';

type DialogType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogs: [
        { id: 1, name: 'Veronika' },
        { id: 2, name: 'Fill' },
        { id: 3, name: 'Artem' },
        { id: 4, name: 'Sergey' },
        { id: 5, name: 'Vlad' },
        { id: 6, name: 'Nikita' }
    ] as DialogType[],
    messages: [
        { id: 1, message: 'Hi.How are you?' },
        { id: 2, message: 'Hey' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Go play?' },
        { id: 5, message: 'I think' },
    ] as MessageType[]
}

export type InitialStateType = typeof initialState

const dialogReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 1,
                message: action.valueOfMessageArea
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default: return state;
    }
}

export default dialogReducer;

type SendMessageType = {
    type: typeof SEND_MESSAGE,
    valueOfMessageArea: string
}
 
export const sendMessage = (valueOfMessageArea: string): SendMessageType => ({ type: SEND_MESSAGE, valueOfMessageArea })
