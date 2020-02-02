import React from 'react';
import { addPost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

class MyPostsContainer extends React.Component {
    render() {
        return <div>
            <MyPosts {...this.props} />
        </div >
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

const MyPostsContainerConnected = connect(mapStateToProps, { addPost })(MyPostsContainer)

export default MyPostsContainerConnected;