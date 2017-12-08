import React, {Component} from 'react'
import {GC_USER_ID} from '../constants'
import VideoContainer from './VideoContainer'
import '../styles/App.css'
import VideoPlayer from "./VideoPlayer";


class Homepage extends Component {
    
    userId = localStorage.getItem(GC_USER_ID)
    
    render() {
        return (
            <div>
                
                <div className='homeComponent'>
                    <VideoContainer name='HOT TOPICS'
                                    link1='CZCEgZW9ino'
                                    link2='9ljOA6Z124k'
                                    link3='nT2zTMx5hZQ'
                                    link4='De10EaMSV6s'/>
    
                    <VideoContainer name='NEW VIDEOS'
                                    link1='qetxzXvOBIQ'
                                    link2='Ig7pL9Gu-20'
                                    link3='UfkDtrU9Flg'
                                    link4='v9WXJuyPMx8'/>
                    
                </div>
            </div>
        )
    }
}

export default Homepage