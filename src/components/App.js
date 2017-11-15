import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route exact path='/' component={Login}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App