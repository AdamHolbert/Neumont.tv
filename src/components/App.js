import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Categories from "./Categories";
import Homepage from './Homepage'
import Ads from './Ads'
import '../styles/App.css'

class App extends Component {
    render() {
        return (
            <div className='pageContents'>
                <div>
                    <Header />
                </div>
                <div className='pageContentsBottom'>
                    <div className='UserProfile'> </div>

                    <div className='Content'>
                        <Switch>
                            <Route exact path='/Categories' component={Categories}/>
                            <Route exact path='/login' component={Login}/>
                            <Route exact path='/' component={Homepage}/>
                            <Route exact path='/ads' component={Ads}/>
                        </Switch>
                    </div>

                    <div className='Ads'>
                        <Ads />
                    </div>
                </div>
            </div>
        )
    }
}

export default App