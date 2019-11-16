import React from 'react'
import s from './Users.module.css';


const Users = (props) => {
    debugger
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1, followed: true, fullname: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' },
                    photoUrl: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
                },
                {
                    id: 2, followed: false, fullname: 'Sasha', status: 'I am a boss', location: { city: 'Moscow', country: 'Russia' },
                    photoUrl: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
                },
                {
                    id: 3, followed: true, fullname: 'Lora', status: 'I am a boss', location: { city: 'Kiev', country: 'Ukraine' },
                    photoUrl: 'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
                }
            ]
        )
    }


    return (<div>
        {
            props.users.map(u => <div key={u.id} className={s.wrapper}>
                <div>
                    <img src={u.photoUrl} className={s.userPhoto} alt="photo" />
                </div>

                {u.followed ? <button onClick={props.unfollow(u.id)}>Follow</button> :
                    <button onClick={props.follow(u.id)}>Unfollow</button>}

                <div>{u.fullname}</div>
                <div>{u.status}</div>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </div>
            )}
    </div>)
}


export default Users;