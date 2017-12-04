import React, {Component} from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants'
import logoPicture from '../Logo.png'
import '../styles/newUser.css'

class Header extends Component {
    
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
                            <div onClick={() => {
                                localStorage.removeItem(GC_USER_ID);
                                localStorage.removeItem(GC_AUTH_TOKEN);
                                this.props.history.push(`/`)
                            }}>logout</div>
                            :
                            <Link to='/login' className='navLinks'>LOGIN</Link>
                        }
                    </div>
                    <div className='headerBotton'>
                        <Search/>
                        {!userId && <Link to='/create' className='newUserButton'>NEW USER</Link>}
                    </div>

                
                </div>
            </div>
        )
    }
    
}

export default withRouter(Header)