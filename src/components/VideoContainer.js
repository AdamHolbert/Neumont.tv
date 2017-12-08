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
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/CZCEgZW9ino" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/9ljOA6Z124k" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/nT2zTMx5hZQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/CZCEgZW9ino" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                        </div>
                        <div className='videoContainerRow'>

                        </div>
                        <div className='videoContainerRow'>

                        </div>
                        <div className='videoContainerRow'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoContainer