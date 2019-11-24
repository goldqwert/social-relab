import React from 'react'
import s from './Users.module.css';
import * as axios from 'axios'
import photoNull from '../../assets/img/photoNull.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        let pages = []

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        debugger
        return (<div>
            <div>
                {
                    pages.map(p => {
                        return <span onClick={(e) => { this.onPageChanged(p) }} className={this.props.currentPage === p && s.selectedPage}>{p}</span>
                    })
                }
            </div>
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