import React from 'react'
import s from './Users.module.css';
import * as axios from 'axios'
import photoNull from '../../assets/img/photoNull.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    }


    render() {
        return (<div>
            {
                this.props.users.map(u => <div key={u.id} className={s.wrapper}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : photoNull} className={s.userPhoto} alt="photo" />
                    </div>

                    {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Follow</button> :
                        <button onClick={() => this.props.follow(u.id)}>Unfollow</button>}

                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
                )}
        </div>)
    }
}



export default Users;