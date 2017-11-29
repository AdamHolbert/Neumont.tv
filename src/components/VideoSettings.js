import React, { Component } from 'react'
import 'react-html5video/dist/styles.css';
import VideoPlayer from "./VideoPlayer";

class VideoSettings extends Component {
  
  render() {
    return (
      <VideoPlayer img='https://www.blog.google/static/blog/images/google-200x200.7714256da16f.png'
                   src='https://s3-us-west-2.amazonaws.com/neumonttv/TestVideo.mp4'/>
    );
  }
}

export default VideoSettings