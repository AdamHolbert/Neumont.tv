import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Categories from "./Categories";
import Homepage from './Homepage'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='UserProfile'> </div>
                <div className='Content'>
                    <Switch>
                        <Route exact path='/Categories' component={Categories}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/' component={Homepage}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App