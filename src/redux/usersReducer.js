
let initialState = {
    users: [
        // {
        //     id: 1, followed: true, fullname: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' },
        //     photoUrl: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
        // },
        // {
        //     id: 2, followed: true, fullname: 'Sasha', status: 'I am a boss', location: { city: 'Moscow', country: 'Russia' },
        //     photoUrl: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
        // },
        // {
        //     id: 3, followed: true, fullname: 'Lora', status: 'I am a boss', location: { city: 'Kiev', country: 'Ukraine' },
        //     photoUrl: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
        // }
    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case 'SET-USERS':
            debugger
            return {

                ...state, users: [...state.users, ...action.users]
            }

        default: return state
    }

}


export default usersReducer;


export const followAC = (userId) => {
    return {
        type: 'FOLLOW', userId
    }
}


export const unfollowAC = (userId) => {
    return {
        type: 'UNFOLLOW', userId
    }
}


export const setUsersAC = (users) => {
    return {
        type: 'SET-USERS', users
    }
}


