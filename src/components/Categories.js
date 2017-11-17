import React, { Component } from 'react'
import '../styles/Cat.css'
import VideoContainer from './VideoContainer'

class Categories extends Component {

    render() {
        return (
            <div className='CategoriesList'>

                <VideoContainer name='Auto & Vehicles'/>

                <VideoContainer name='Beauty & Fashion'/>

                <VideoContainer name='Comedy'/>

                <VideoContainer name='Education'/>

                <VideoContainer name='Entertainment'/>

                <VideoContainer name='Family Entertainment'/>

                <VideoContainer name='Film & Animation'/>

                <VideoContainer name='Food'/>

                <VideoContainer name='Gaming'/>

                <VideoContainer name='How-to & Style'/>

                <VideoContainer name='Music'/>

                <VideoContainer name='News & Politics'/>

                <VideoContainer name='Nonprofits & Activism'/>

                <VideoContainer name='People & Blogs'/>

                <VideoContainer name='Pets & Animals'/>

                <VideoContainer name='Science & Technology'/>

                <VideoContainer name='Sports'/>

                <VideoContainer name='Travel & Events'/>

            </div>
        )
    }

}

export default Categories