import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import '../styles/userProfile.css'
import {GC_USER_ID} from '../constants'
import UserSettings from "./UserSettings";



class UserProfile extends Component {


    state = {
        login: true, // switch between Login and SignUp
        username: '',
        password: '',
        profilePictureUrl: 'https://s3-ap-southeast-2.amazonaws.com/adme-hyundai/wp-content/uploads/2017/05/18144805/wallpaper-for-facebook-profile-photo.jpg',
        name: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            login: true, // switch between Login and SignUp
            username: 'TestUser',
            password: '',
            profilePictureUrl: 'https://s3-ap-southeast-2.amazonaws.com/adme-hyundai/wp-content/uploads/2017/05/18144805/wallpaper-for-facebook-profile-photo.jpg',
            name: '',
            showing: true
        }

        this._showing = this._showing.bind(this)
    }

    _showing(){
        console.log(this.state.showing)
        this.setState({showing: !this.state.showing})
    }

    render() {
        var style;
        if (this.state.showing){
            style += ' showing'
        } else {
            style += ' hidden'
        }
        console.log(this.props)

        var userName;

        if(this.props.data.loading) {
            userName = 'loading...'
        } else if (this.props.data.error){
            userName = 'ERROR'
        } else {
            userName = this.props.data.User.name;
        }


        return (
            <div className='UserProfileContainer'>
                <div onClick={this._showing} className='flexContainer'>
                    <div>
                        {!this.state.showing && <div id='plus' className='buttonPlus'>+</div>}
                    </div>
                    <div>
                        {this.state.showing && <div id='minus' className='buttonMinus'>-</div>}
                    </div>
                </div>
                <div className={style}>

                    <img className='ProfilePicture'
                        src={this.state.profilePictureUrl}
                    alt='Profile'/>

                    <div className='UserName'>
                        Hello {userName}
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

                        <UserSettings/>
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


export default graphql(CurrentUserNameQuery, {
    options: {
        variables: {
            loggedInUserID: localStorage.getItem(GC_USER_ID)
        }
    }
})(UserProfile)
