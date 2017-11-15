import React, { Component } from 'react'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

class Login extends Component {

    state = {
        login: true, // switch between Login and SignUp
        username: '',
        password: '',
        name: ''
    }

    render() {

        return (
            <div>
                <h4>{this.state.login ? 'Login' : 'Sign Up'}</h4>
                <div>
                    {!this.state.login &&
                    <input
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                        type='text'
                        placeholder='Your name'
                    />}
                    <input
                        value={this.state.username}
                        onChange={(e) => this.setState({ username: e.target.value })}
                        type='text'
                        placeholder='Your email address'
                    />
                    <input
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                        type='password'
                        placeholder='Choose a safe password'
                    />
                </div>
                <div>
                    <div
                        onClick={() => this._confirm()}
                    >
                        {this.state.login ? 'login' : 'create account' }
                    </div>
                    <div
                        onClick={() => this.setState({ login: !this.state.login })}
                    >
                        {this.state.login ? 'need to create an account?' : 'already have an account?'}
                    </div>
                </div>
            </div>
        )
    }
  
    users = [{
        id: '1',
        username: 'Adam',
        password: '123'
    }, {
        id: '2',
        username: 'William',
        password: '123'
    }, {
        id: '3',
        username: 'Priya',
        password: '123'
    }];

    _confirm() {
        const {username, password} = this.state;
        var found = false;
        this.users.forEach(function(data) {
          if(data.username === username && data.password === password){
            found = true;
          }
        });
        if(found){
            this._saveUserData(1, 1);
        }
    }

    _saveUserData = (id, token) => {
        localStorage.setItem(GC_USER_ID, id)
        localStorage.setItem(GC_AUTH_TOKEN, token)
    }

}

export default Login