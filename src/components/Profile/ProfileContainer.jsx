import React from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profileReducer'

class ProfileContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })

    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} />
        </div >
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}


export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);