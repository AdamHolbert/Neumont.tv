import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Categories from "./Categories";
import Homepage from './Homepage'
import Ads from './Ads'
import UserProfile from "./UserProfile";
import Disclaimer from "./Disclaimer";
import '../styles/App.css'
import { HIDE_DISCLAIMER } from '../constants'
import VideoSettings from "./VideoSettings";

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      hideDisclaimer: (localStorage.getItem(HIDE_DISCLAIMER) === 'true')
    }
    this.hideDisclaimer = this.hideDisclaimer.bind(this)
  }
  
  hideDisclaimer(){
    this.setState({ hideDisclaimer: true });
  }
  
  render() {
    if(!this.state.hideDisclaimer){
      return(
        <Disclaimer hideDisclaimer={this.hideDisclaimer} />
      )
    } else {
      return (
        <div className='pageContents'>
          <div>
            <Header/>
          </div>
          <div className='pageContentsBottom'>
            <div className='UserProfile'>
              <UserProfile/>
            </div>
    
            <div className='Content'>
              <Switch>
                <Route exact path='/Categories' component={Categories}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/ads' component={Ads}/>
                <Route exact path='/video/settings' component={VideoSettings}/>
                <Route exact path='/' component={Homepage}/>
              </Switch>
            </div>
    
            <div className='Ads'>
              <Ads/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default App