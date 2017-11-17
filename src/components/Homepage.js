import React, { Component } from 'react'
import { GC_USER_ID } from '../constants'
import VideoContainer from './VideoContainer'

class Homepage extends Component {

    userId = localStorage.getItem(GC_USER_ID)
    render() {
        return (
            <div className='homeComponent'>

                <VideoContainer name='HOT TOPICS:'/>
                <VideoContainer name='NEW VIDEOS:'/>
                {this.userId ? <div> User Status: Logged in</div> : <div>User Status: logged out</div>}
            </div>

        )
    }
}

export default Homepage