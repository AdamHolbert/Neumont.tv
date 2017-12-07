import React, {Component} from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants'
import logoPicture from '../Logo.png'
import '../styles/newUser.css'

class Header extends Component {
    state = {
        profilePictureUrl: 'https://s3-ap-southeast-2.amazonaws.com/adme-hyundai/wp-content/uploads/2017/05/18144805/wallpaper-for-facebook-profile-photo.jpg',
    };
    render() {
        const userId = localStorage.getItem(GC_USER_ID)
        return (
            <div className='header'>

                <img src={logoPicture} className='headerLogo'
                     alt='Neumont Tv Logo'/>

                <div className='headerBar'>
                    <div className='headerTop'>
                        <Link to='/' className='navLinks'>HOME</Link>
                        <Link to='/about' className='navLinks'>ABOUT US</Link>
                        <Link to='/contact' className='navLinks'>CONTACT US</Link>

                        {userId ?
                            <div className='logOutButton' onClick={() => {
                                localStorage.removeItem(GC_USER_ID);
                                localStorage.removeItem(GC_AUTH_TOKEN);
                                this.props.history.push(`/`)
                            }}>LOGOUT</div>
                            :
                            <Link to='/login' className='loginButton'>LOGIN</Link>
                        }
                        <div className='settingsOverlay'>
                        <img className='ProfilePictureHeader'
                             src={this.state.profilePictureUrl}
                             alt='Profile'/>
                        </div>
                    </div>
                    <div className='headerBotton'>
                        <Search/>
                        <Link to='/newUser' className='newUserButton'>{!userId ? 'NEW USER' : ' '}</Link>
                    </div>

                
                </div>
            </div>
        )
    }
    
}

export default withRouter(Header)