import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { withAuthRedirect } from '../hoc/withAuthRedirect';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 12
        this.props.getUserProfile(userId)
    }


    render() {

        return <div>
            <Profile {...this.props} profile={this.props.profile} />
        </div >
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}
let authRedirectComponent = withAuthRedirect(ProfileContainer);

let WithRouteProfileContainer = withRouter(authRedirectComponent)

export default connect(mapStateToProps, { getUserProfile })(WithRouteProfileContainer);