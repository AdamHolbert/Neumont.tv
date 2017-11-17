import React, { Component } from 'react'
import VideoThumbnail from './VideoThumbnail'


class VideoContainer extends Component {

    render() {
        return (
            <div>
                <div className='vidContainer'>
                    <div className='videoContainerName'>{this.props.name}</div>

                    <div className='lineBreak'></div>

                    <div className='videoContainerVideos'>
                        <VideoThumbnail name='V1' />
                        <VideoThumbnail name='V2' />
                        <VideoThumbnail name='V3' />
                        <VideoThumbnail name='V4' />
                        <VideoThumbnail name='V5'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoContainer