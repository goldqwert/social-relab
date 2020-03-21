const initialState = {
    friends: [
        { id: 1, friend: 'Sasha' },
        { id: 2, friend: 'Andrew' },
        { id: 3, friend: 'Sveta' },
    ]
}

export type initialState = typeof initialState;


const sidebarReducer = (state = initialState, action: any) => {
    return state
}

export default sidebarReducer; 