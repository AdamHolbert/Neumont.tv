import React, { Component } from 'react'
import VideoThumbnail from './VideoThumbnail'


class VideoContainer extends Component {

    render() {
        return (
            <div>
                <div className='vidContainer'>
                    <div className='videoContainerName'>{this.props.name}</div>

                    <div className='lineBreak'></div>

                    <div>

                        <div className='videoContainerRow'>
                            <VideoThumbnail name='V-1' />
                            <VideoThumbnail name='V-2' />
                            <VideoThumbnail name='V-3' />
                            <VideoThumbnail name='V-4' />
                            <VideoThumbnail name='V-5' />
                        </div>
                        <div className='videoContainerRow'>
                            <VideoThumbnail name='  V-6' />
                            <VideoThumbnail name='  V-7' />
                            <VideoThumbnail name='  V-8' />
                            <VideoThumbnail name='  V-9' />
                            <VideoThumbnail name='  V-10' />
                        </div>
                        <div className='videoContainerRow'>
                            <VideoThumbnail name='V-11' />
                            <VideoThumbnail name='V-12' />
                            <VideoThumbnail name='V-13' />
                            <VideoThumbnail name='V-14' />
                            <VideoThumbnail name='V-15' />
                        </div>
                        <div className='videoContainerRow'>
                            <VideoThumbnail name='  V-16' />
                            <VideoThumbnail name='  V-17' />
                            <VideoThumbnail name='  V-18' />
                            <VideoThumbnail name='  V-19' />
                            <VideoThumbnail name='  V-20' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoContainer