import React, { Component } from 'react'
import '../styles/video.css'

class VideoThumbnail extends Component {

    render() {

        if(!this.props.name){
            return(
                <div className='video'>
                    <img src={'https://cdn.business2community.com/wp-content/uploads/2017/05/Video-Marketing.jpg'}/>
                    Video name not found
                </div>
            )
        }
    
        return (
            <div className='video'>
                <img src='https://cdn.business2community.com/wp-content/uploads/2017/05/Video-Marketing.jpg'/>
            </div>
    
        )
    }
}

export default VideoThumbnail