import React, { Component } from 'react'
import 'react-html5video/dist/styles.css';
import VideoPlayer from "./VideoPlayer";

class VideoSettings extends Component {
  
  render() {
    return (
      <VideoPlayer img='https://www.blog.google/static/blog/images/google-200x200.7714256da16f.png'
                   src='https://s3.us-west-2.amazonaws.com/neumonttv/TestVideo.mp4?response-content-disposition=inline&X-Amz-Security-Token=FQoDYXdzELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDEgKUEMFJaPHImR9JiL6Ad7yxxHFwtCmfsWK%2Bs%2FnUVRsLGMv%2BDInfYhcYT8f7fcfGjMOZzvJNNf03QBSPexZDT%2FWegC%2B91VZGoI49oB%2FBTsw%2BPPu8%2BPNRVCqgodQbFaJrTkPNBTvtSbxtPZI8CSzOET4VktfU120N9EikM0nu0InEZme%2B0nUSb6rwva8d9Mv%2F1jG1GNCobfTxGjYGc%2FLlFUmGBEZ1Vg4%2FZs4Rvw8ooR59RQCAVYeJUxO4rPusnRu01UElSQGEExN%2FYUBxS1wSfB%2FWhbXLyr3ChGjoaxPRrg2SpedsPqvEp%2FUys6MWYs%2BO5p%2Bn1y2rUY%2B7jvs%2FrkEPgnwCIJg7j1kt1Ao2fP40AU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20171129T050643Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAJ7P76HDCCWSS5QCQ%2F20171129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=c6a85d04390b042cd81cc9429e5bca06990aa21f2a63ede3d06e05b365010836'/>
    );
  }
}

export default VideoSettings