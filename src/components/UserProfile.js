import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import '../styles/userProfile.css'
import {GC_USER_ID} from '../constants'



class UserProfile extends Component {


    state = {
        login: true, // switch between Login and SignUp
        username: '',
        password: '',
        profilePictureUrl: 'https://s3-ap-southeast-2.amazonaws.com/adme-hyundai/wp-content/uploads/2017/05/18144805/wallpaper-for-facebook-profile-photo.jpg',
        name: ''
    }

    render() {

        return (
            <div className='overlay'>
            <div className='UserProfileContainer'>

                <img className='ProfilePicture'
                    src={this.state.profilePictureUrl}
                alt='Profile'/>

                <div className='UserName'>
                    Hello {CurrentUserNameWithData}
                </div>

                <div className='UserLinks'>

                    <div className='UserUploads'>
                        <Link to='/' className='UserLinks'>Uploads</Link>
                    </div>
                    <div className='UserLikedVids'>
                        <Link to='/' className='UserLinks'>Liked Videos</Link>
                    </div>
                    <div className='UserPlaylists'>
                        <Link to='/' className='UserLinks'>Playlists</Link>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}

const CurrentUserNameQuery = gql`
query CurrentUserName($loggedInUserID: ID!) {
  User (id : $loggedInUserID){
    name
  }
}
`;

const CurrentUserNameWithData = graphql(CurrentUserNameQuery, {
    options: {
        variables: {
            loggedInUserID: localStorage.getItem(GC_USER_ID)
        }
    }
})(UserProfile)

export default UserProfile