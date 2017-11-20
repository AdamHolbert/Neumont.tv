import React, { Component } from 'react'
import { GC_USER_ID } from '../constants'
import VideoContainer from './VideoContainer'
import Ads from './Ads'


class Homepage extends Component {

    userId = localStorage.getItem(GC_USER_ID)
    render() {
        return (
            <div>
                <div className='Ads'>
                    <Ads />
                </div>

                <div className='RepresentForUserProfile'>
                    <Ads />
                </div>

                <div className='homeComponent'>
                    <div className='hotTopics'>
                    <VideoContainer name='HOT TOPICS:'/>
                </div>

                <div className='newVideos'>
                    <VideoContainer name='NEW VIDEOS:'/>
                </div>

                {this.userId ? <div> User Status: Logged in</div> : <div>User Status: logged out</div>}

                </div>
            </div>
        )
    }
}

export default Homepage