import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 12
        this.props.getUserProfile(userId)
    }


    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'} />
        }
        return <div>
            <Profile {...this.props} profile={this.props.profile} />
        </div >
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithRouteProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, { getUserProfile })(WithRouteProfileContainer);