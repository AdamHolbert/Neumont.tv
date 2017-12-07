import React, { Component } from 'react'
import '../styles/userSettings.css'
import Icon from '../SettingsIcon.png'
import {Link} from 'react-router-dom'
class UserSettings extends Component {
  
  render() {
    return (
      <div className='sets'>
          <Link to='/settings'> <img src={Icon} className='settingsIcon'/></Link>

      </div>
    )
  }
}

export default UserSettings