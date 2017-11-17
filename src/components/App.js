import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Homepage from './Homepage'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/' component={Homepage}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App