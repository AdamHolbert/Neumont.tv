import React, { Component } from 'react'
import VideoThumbnail from './VideoThumbnail'


class VideoContainer extends Component {

    render() {
    
        const link1 = 'https://www.youtube.com/embed/' + this.props.link1;
        const link2 = 'https://www.youtube.com/embed/' + this.props.link2;
        const link3 = 'https://www.youtube.com/embed/' + this.props.link3;
        const link4 = 'https://www.youtube.com/embed/' + this.props.link4;
        
        
        
        return (
            <div>
                <div className='videoContainer'>
                    <div className='videoContainerName'>{this.props.name}</div>

                    <div className='lineBreak'></div>
                    <div className='videoContainerVideos'>
                        <div className='videoContainerRow'>
                            <iframe width="25%" src={link1} frameborder="0"
                                    gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                            <iframe width="25%" src={link2} frameborder="0"
                                    gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                            <iframe width="25%" src={link3} frameborder="0"
                                    gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                            <iframe width="25%" src={link4} frameborder="0"
                                    gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoContainer