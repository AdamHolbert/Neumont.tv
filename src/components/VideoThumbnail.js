import React, { Component } from 'react'
import '../styles/video.css'


class VideoThumbnail extends Component {

    render() {

        if(!this.props.name){
            return(
                <div className='video'>
                    Video name not found
                </div>
            )
        }

        return (
            <div className='video'>
                {this.props.name}
            </div>

        )
    }
}

export default VideoThumbnail