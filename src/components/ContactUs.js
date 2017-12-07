import React, { Component } from 'react'
import '../styles/App.css'
import neumont from '../neumontCollege.png'
import {Link} from 'react-router-dom'

class ContactUs extends Component {

    render() {
        return (
            <div className='contact'>
                <Link to='/contact-image'> <div className='nImage'><img src={neumont}/></div></Link>

            <div className='overlayContainer'>
            <div className='ContactContainer'>

                <div className='text'>
                <div className='Address'>
                    143 SOUTH MAIN STREET, SALT LAKE CITY 84111
                </div>
                <div className='PhoneNumber'>
                    609-686-7601
                </div>
                <div className='Email'>
                    wwalsh@student.neumont.edu
                </div>
                </div>

            </div>
            </div>
            </div>

        )
    }
}

export default ContactUs