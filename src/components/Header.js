import React, {Component} from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants'
import logoPicture from '../Logo.png'

class Header extends Component {
    
    render() {
        const userId = localStorage.getItem(GC_USER_ID)
        return (
            <div className='header'>
                <img src={logoPicture} className='headerLogo'
                     alt='Neumont Tv Logo'/>
                <div className='headerBar'>
                    <div className='headerTop'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About us</Link>
                        <Link to='/contact'>Contact us</Link>
                        
                        {userId ?
                            <div onClick={() => {
                                localStorage.removeItem(GC_USER_ID);
                                localStorage.removeItem(GC_AUTH_TOKEN);
                                this.props.history.push(`/`)
                            }}>logout</div>
                            :
                            <Link to='/login'>login</Link>
                        }
                    </div>
                    <div className='headerBotton'>
                        <Search/>
                        {!userId && <Link to='/create'>New User</Link>}
                    </div>
                
                
                </div>
            </div>
        )
    }
    
}

export default withRouter(Header)