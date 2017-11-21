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

                        <div className='videoContainerRow'>
                            <VideoThumbnail name='V1' />
                            <VideoThumbnail name='V2' />
                            <VideoThumbnail name='V3' />
                            <VideoThumbnail name='V4' />
                            <VideoThumbnail name='V5' />
                        </div>
                        <div className='videoContainerRow'>
                            <VideoThumbnail name='V6' />
                            <VideoThumbnail name='V7' />
                            <VideoThumbnail name='V8' />
                            <VideoThumbnail name='V9' />
                            <VideoThumbnail name='V10' />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoContainer