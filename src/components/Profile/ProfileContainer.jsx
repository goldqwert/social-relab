import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux'
class ProfileContainer extends React.Component {

    updateUserId = () => {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.myUserId
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.updateUserId()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.updateUserId()
        }
    }

    render() {

        return <div>
            <Profile {...this.props} />
        </div >
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        myUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)