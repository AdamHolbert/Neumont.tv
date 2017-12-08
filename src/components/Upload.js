import React, { Component } from 'react'
import {GC_USER_ID} from '../constants'
import gql from 'graphql-tag'
import '../styles/upload.css'


class Upload extends Component {
    
    
    constructor(props) {
        super();
        this.state = {
            title: '',
            src: '',
            pic: '',
            errorMsg: '',
            loading: false
        }
        
        this._uploadVideo = this._uploadVideo.bind(this)
    }
    
    
    render() {
        return (
            <div className='uploadContainer'>
                <div className='errorSection'>
                    {this.state.errorMsg}
                </div>
                <div className="uploadSection">
                    <div className='CONTENT1'>
                        Video Title :
                    </div>
                    <input
                        className="CONTENT2 uploadTextBox"
                        value={this.state.title}
                        onChange={(e) => this.setState({title: e.target.value})}
                        type='text'
                        placeholder='Title'
        
                    />
                </div>
                <div className="uploadSection">
                    <div className='CONTENT1'>
                        Video Source :
                    </div>
                    <input
                        className="CONTENT2 uploadTextBox"
                        value={this.state.src}
                        onChange={(e) => this.setState({src: e.target.value})}
                        type='text'
                        placeholder='Source'
        
                    />
                </div>
                <div className="uploadSection">
                    <div className='CONTENT1'>
                        Video Picture :
                    </div>
                    <input
                        className="CONTENT2 uploadTextBox"
                        value={this.state.pic}
                        onChange={(e) => this.setState({pic: e.target.value})}
                        type='text'
                        placeholder='Picture'
        
                    />
                </div>
                <div className="uploadSection">
                    <div className="loginSection forgotPassword">
                        {this.state.loading ?
                            <div onClick={this._uploadVideo}>
                                <button
                                    id={"button"}
                                    className="loginOrSignUpButton"
                                >
                                    Uploading...
                                </button>
                            </div>
                            :
                            <div onClick={this._uploadVideo}>
                                <button
                                    id={"button"}
                                    className="loginOrSignUpButton"
                                    onClick={() => this._uploadVideo()
                                    }
                                >
                                    Upload Video
                                </button>
                            </div>
                        }
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
    
    _uploadVideo() {
        const {title, src, pic} = this.state;
        const userId = localStorage.getItem(GC_USER_ID);
        if(title){
            if(src){
                if(pic){
                    if(userId){
                        this.setState({
                            errorMsg: "",
                            loading: true
                        })
                        
                        
                        
                        
                        
                    } else {
                        this.setState({errorMsg: "How are you even on this page, you're not logged in?!?"})
                    }
                } else {
                    this.setState({errorMsg: "Picture needs to be filled"})
                }
            } else {
                this.setState({errorMsg: "Source needs to be filled"})
            }
        } else {
            this.setState({errorMsg: "Title needs to be filled"})
        }
        
        
    }
}

// const ADD_USER_VIDEO = gql`
// mutation AddUserVideo ($userId: ID!, $title: String!, $src: String!, $thumbnail:String! ){
//   createVideo(title: $title, thumbnailURL: $thumbnail, src: $src, ownerId: $userId){
//     id
//   }
// `

export default Upload