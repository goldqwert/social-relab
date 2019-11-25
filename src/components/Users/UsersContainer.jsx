import React from 'react';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, preloaderIsFetchingAC } from '../../redux/usersReducer'
import { connect } from 'react-redux';
import Users from './Users'
import * as axios from 'axios'
import s from './Users.module.css';
import Preloader from '../Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.preloaderIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.preloaderIsFetching(false)
            })

    }

    onPageChanged = (pageNumber) => {
        this.props.preloaderIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.preloaderIsFetching(false)
            })
    }



    render() {
        return <>
            {this.props.isFetching ? <Preloader classForPreloader={s.preloader} /> : <Users totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />}

        </>
    }

}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        preloaderIsFetching: (status) => {
            dispatch(preloaderIsFetchingAC(status))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

