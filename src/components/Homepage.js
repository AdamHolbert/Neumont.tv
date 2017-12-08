import React, { Component } from 'react'
import { GC_USER_ID } from '../constants'
import VideoContainer from './VideoContainer'
import '../styles/App.css'
import VideoPlayer from "./VideoPlayer";


class Homepage extends Component {

    userId = localStorage.getItem(GC_USER_ID)
    render() {
        return (
            <div>

                <div className='homeComponent'>
                    <h2> HOT TOPICS </h2>
                    <div className='hotTopics'>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/CZCEgZW9ino" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9ljOA6Z124k" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/nT2zTMx5hZQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/De10EaMSV6s" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                </div>
                    <h2> NEW VIDEOS </h2>
                <div className='newVideos'>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qetxzXvOBIQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ig7pL9Gu-20" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UfkDtrU9Flg" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/v9WXJuyPMx8" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                </div>

                </div>
            </div>
        )
    }
}

export default Homepage