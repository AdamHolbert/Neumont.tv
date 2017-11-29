import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/userProfile.css'



class UserProfile extends Component {

    state = {
        login: true, // switch between Login and SignUp
        username: 'TestUser',
        password: '',
        profilePictureUrl: 'https://s3-ap-southeast-2.amazonaws.com/adme-hyundai/wp-content/uploads/2017/05/18144805/wallpaper-for-facebook-profile-photo.jpg',
        name: ''
    }

    render() {

        return (
            <div className='UserProfileContainer'>

                <img className='ProfilePicture'
                    src={this.state.profilePictureUrl}
                alt='Profile'/>

                <div className='UserName'>
                    Hello {this.state.username}
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

        )
    }
}

export default UserProfile