import React from 'react';
import { follow, unfollow, getUsers } from '../../redux/usersReducer'
import { connect } from 'react-redux';
import Users from './Users'
import s from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux'
import { getPageSize, getUsersState, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowInProgress } from '../../redux/users-selector';

class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader classForPreloader={s.preloader} /> : <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followInProgress={this.props.followInProgress}
            />}

        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, getUsers
    })
)(UsersContainer)

