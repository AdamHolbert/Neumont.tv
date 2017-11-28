import React, { Component } from 'react'
import '../styles/userProfile.css'



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
            <div className='UserProfileContainer'>
                <img className='ProfilePicture'
                    src={this.state.profilePictureUrl}/>

                <div className='UserLinks'>
                    <div className='UserUploads'>
                        This will be a link
                    </div>
                    <div className='UserLikedVids'>
                        This will be liked vids
                    </div>
                    <div className='UserPlaylists'>
                        This will go to playlists
                    </div>
                </div>
            </div>

        )
    }
}

export default UserProfile