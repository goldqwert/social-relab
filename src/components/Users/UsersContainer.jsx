import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, preloaderIsFetching, changeFollowInProgress, getUsers } from '../../redux/usersReducer'
import { connect } from 'react-redux';
import Users from './Users'
import * as axios from 'axios'
import s from './Users.module.css';
import Preloader from '../Preloader/Preloader';
import { usersAPI } from '../../api/api.js'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                changeFollowInProgress={this.props.changeFollowInProgress}
                followInProgress={this.props.followInProgress}
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
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, preloaderIsFetching, changeFollowInProgress, getUsers
})(UsersContainer);
