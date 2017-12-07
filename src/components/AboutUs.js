import React, { Component } from 'react'
import '../styles/App.css'
import neumont from '../neumontCollege.png'
import {Link} from 'react-router-dom'

class AboutUs extends Component {

    render() {
        return (
            <div className='contact'>

                <div className='overlayContainer'>
                    <Link to='/contact-image'> <div className='nImage'><img src={neumont}/></div></Link>
                    <div className='ContactContainer'>

                        <div className='text'>
                            Message about us...
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default AboutUs