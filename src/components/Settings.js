import React, { Component } from 'react'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants'
import {withRouter} from 'react-router-dom'
import {graphql, compose} from 'react-apollo'
import gql from 'graphql-tag'
import '../styles/login.css'

import {Link} from 'react-router-dom'
class Settings extends Component {
    constructor(props) {
        super();
        this.state = {
            validLogin:false,
            email: '',
            password: '',
            showing:true,
            name: ''
        }
    }

    render() {
        const userId = localStorage.getItem(GC_USER_ID)
        return (
            <div className='componentHolder'>
                <div className="loginComponent">
                    <div className="loginTop">
                        <div className={this.state.login ? 'loginSelected' : 'loginUnselected RBorder'}
                             onClick={() => this.setState({login: true})}
                        >User Settings:
                        </div>

                    </div>

                    <div className="loginArea">

                        <div className="loginSection">
                            New Email :
                            <input
                                className="coolTextBox"
                                value={this.state.email}
                                onChange={(e) => this.setState({email: e.target.value})}
                                type='text'
                                placeholder='Enter your new email address'

                            />
                        </div>
                        <div className="loginSection">
                           New Username :
                            <input
                                className="coolTextBox"
                                value={this.state.name}
                                onChange={(e) => this.setState({name: e.target.value})}
                                type='text'
                                placeholder='Enter your new username'

                            />
                        </div>
                        <div className="loginSection">
                            New Password :
                            <input
                                className="coolTextBox"
                                value={this.state.password}
                                onChange={(e) => this.setState({password: e.target.value})}
                                type='password'
                                placeholder='Create a new secured password'
                            />
                        </div>

                        <div className="loginSection forgotPassword">

                                <button
                                    id={"button"}
                                    className="loginOrSignUpButton"
                                    onClick={() => this._confirm()
                                    }
                                >
                                    {this.state.login ? 'Update' : 'Update'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

    _confirm = async () => {
        const {email, password, name} = this.state;
        if (true) {
            const result = await this.props.updateUserMutation({
                variables: {
                    email,
                    name,
                    password,
                }
            })
            const {id, token} = result.data.updateUser;
            this._saveUserData(id, token)
            this.props.history.replace('/')

        } else {
            //Sign up
            try {
                const result = await this.props.signupUserMutation({
                    variables: {
                        email,
                        password,
                        name
                    }
                })
                    .catch((error) => {

                    });
                const {id, token} = result.data.signupUser;
                this._saveUserData(id, token);

                this.props.history.replace('/')

            } catch (e) {
                console.log("error in sign up: ");
                console.log(e);
            }
        }
    };

    _saveUserData = (id, token) => {
        localStorage.setItem(GC_USER_ID, id)
        localStorage.setItem(GC_AUTH_TOKEN, token)
    }


}

const SIGNUP_USER_MUTATION = gql`
mutation SignupUserMutation ($email: String!, $password: String!, $name: String) {
    signupUser(email: $email, password: $password, name: $name) {
        id
        token
    }
}
`
const AUTHENTICATE_USER_MUTATION = gql`
mutation AuthenticateUserMutation ($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
        id
        token
    }
}
`

const UPDATE_USER_MUTATION = gql`
mutation UpdateUserMutation ( $id: ID!,$email: String!, $password: String!, $name: String) {
    updateUser(
    id:$id
    email:$email
    name: $username
    password:$password
  ) {
    id
    token
  }
}
`

export default compose(
    graphql(SIGNUP_USER_MUTATION, {
        name: 'signupUserMutation'
    }),
    graphql(AUTHENTICATE_USER_MUTATION, {
        name: 'authenticateUserMutation'
    }),
    graphql(UPDATE_USER_MUTATION, {
        name:'updateUserMutation'
    })
)(withRouter(Settings))
