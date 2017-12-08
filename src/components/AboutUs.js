import React, { Component } from 'react'
import '../styles/App.css'
import neumont from '../neumontCollege.png'
import {Link} from 'react-router-dom'

class AboutUs extends Component {

    render() {
        return (
            <div className='contact'>

                <div className='overlayContainer'>
                    <Link to='/contact-image'> <div className='nImage'><img src={neumont}/></div></Link>
                    <div className='ContactContainer'>

                        <div className='text'>
                            <p>
                                Group Name: Neumont.tv
                                <br />
                                <br />
                                Members:
                                Priya Vora,
                                Adam Holbert,
                                William Walsh
                                <br />
                            </p>
                            Project Motive:
                            <p className='projectMotive'>
                            We wanted to to build an application that would be challenging and practical,
                            something we would see in the real world. In simple terms, a website that is a basic imitation of Youtube.
                            Our project is centered around us taking advantage of the fact that this course is language agnostic.
                            As a group we decided upon on a video streaming application, due to none of us members knowing how to
                            develop the hand shake between the server and client to stream and upload an entire video. For this group project
                            we want to further our knowledge upon the basics of making a web application.
                            This project is broken up into three parts.The main purpose of our project is to record live videos on to our website.
                            Users would be able to upload various length of videos on our website,where the data would be persisted within Graph.Cool.
                            We are utilizing React as a library to enhance the view of our web application.
                            We made this decision to learn more about the industry standards and potential job opportunities.
                            The purpose of our website is not to compete with existing companies, however to give the public another platform that's user friendly and convenient.This project is a means to take advantage of the time and teach ourselves how video streaming works.
                            <div className='LearnMore'>
                                Learn More
                            </div></p>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default AboutUs