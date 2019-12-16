import React from 'react';
import { follow, unfollow, getUsers } from '../../redux/usersReducer'
import { connect } from 'react-redux';
import Users from './Users'
import s from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, getUsers
    })
)(UsersContainer)

