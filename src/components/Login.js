import React, {Component} from 'react'
import {GC_USER_ID, GC_AUTH_TOKEN} from '../constants'
import {withRouter} from 'react-router-dom'
import {graphql, compose} from 'react-apollo'
import gql from 'graphql-tag'
import '../styles/login.css'

class Login extends Component {
    
    constructor(props) {
        super();
        this.state = {
            login: !(props.location.pathname === '/newUser'), // switch between Login and SignUp
            loading: false,
            valid: true,
            email: '',
            password: '',
            name: ''
        }
        this._confirm = this._confirm.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.state.login === true && nextProps.location.pathname === '/newUser') {
            this.setState({
                login: false
            })
            this.setState({loadMessage: true})
        }
        if (!this.state.login === true && nextProps.location.pathname === '/login') {
            this.setState({
                login: true
            })
        }
    }
    
    render() {
        return (
            <div className='componentHolder'>
                <div className="loginComponent">
                    <div className="loginTop">
                        <div className={this.state.login ? 'loginSelected' : 'loginUnselected RBorder'}
                             onClick={() => {
                                 if(!this.state.login){
                                     this.setState({
                                         login: true,
                                         loading: false,
                                         valid: true
                                     })
                                 }
                             }}
                        >Login
                        </div>
                        <div className={!this.state.login ? 'loginSelected' : 'loginUnselected LBorder'}
                             onClick={() => {
                                 if(this.state.login){
                                     this.setState({
                                         login: false,
                                         loading: false,
                                         valid: true
                                     })
                                 }
                             }}
                        >Sign up
                        </div>
                    </div>
                    
                    <div className="loginArea">
                        <div className="loginSection">
                            Email :
                            <input
                                className="coolTextBox"
                                value={this.state.email}
                                onChange={(e) => this.setState({email: e.target.value})}
                                type='text'
                                placeholder='Your email address'
                            
                            />
                        </div>
                        <div className="loginSection">
                            Password :
                            <input
                                className="coolTextBox"
                                value={this.state.password}
                                onChange={(e) => this.setState({password: e.target.value})}
                                type='password'
                                placeholder='Choose a safe password'
                            />
                        </div>
                        {!this.state.login &&
                        <div className="loginSection">
                            User name:
                            <input
                                className="coolTextBox"
                                value={this.state.name}
                                onChange={(e) => this.setState({name: e.target.value})}
                                type='text'
                                placeholder='Your name'
                            />
                        </div>
                        }
                        
                        <div className='THIS_DIV_IS_FOR_YOU_PRIYA'>
                            {this.errorMsg(this.state.loading, this.state.valid)}
                        </div>
                        
                        <div className="loginSection forgotPassword">
                            <div onClick={this._showing}>
                                <button
                                    id={"button"}
                                    className="loginOrSignUpButton"
                                    onClick={() => this._confirm()
                                    }
                                >
                                    {this.state.login ? 'Login' : 'Create an account'}
                                
                                </button>
                            </div>
                            {this.state.login &&
                            <a href="http://lmgtfy.com/?q=What+is+my+password%3F" className="loginSection">Forgot your
                                password?</a>
                            }
                        </div>
                    
                    
                    </div>
                </div>
            
            </div>
        )
    }
    
    errorMsg(loading, valid) {
        if (loading) {
            return 'loading...';
        } else if (!valid) {
            return 'Invalid email/password';
        }
        return ''
    }
    
    _confirm = async () => {
        const {email, password, name, login} = this.state;
        this.setState({loading: true});
        if (login) {
            //Login
            try {
            const result = await this.props.authenticateUserMutation({
                    variables: {
                        email,
                        password,
                    }
                })
                .then((result) => {
                    this.setState({
                        loading: false
                    })
                    return result
                })
                .catch((error) => {
                    this.setState({
                        loading: false,
                        valid: false
                    })
                })
            const {id, token} = result.data.authenticateUser
            this._saveUserData(id, token)
            this.props.history.replace('/')
    
            } catch (e) {
                this.setState({
                    loading: false,
                    valid: false
                })
            }
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
                    .then((result) => {
                        this.setState({
                            loading: false
                        })
                        return result
                    })
                    .catch(() => {
                        this.setState({
                            loading: false,
                            valid: false
                        })
                    })
                const {id, token} = result.data.signupUser;
                this._saveUserData(id, token);
                
                this.props.history.replace('/')
                
            } catch (e) {
                this.setState({
                    loading: false,
                    valid: false
                })
            }
        }
    };
    
    _saveUserData = (id, token) => {
        localStorage.setItem(GC_USER_ID, id)
        localStorage.setItem(GC_AUTH_TOKEN, token)
    }
}

const SIGNUP_USER_MUTATION = gql`
mutation SignupUserMutation ($email: String!, $password: String!, $name: String!) {
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

export default compose(
    graphql(SIGNUP_USER_MUTATION, {
        name: 'signupUserMutation'
    }),
    graphql(AUTHENTICATE_USER_MUTATION, {
        name: 'authenticateUserMutation'
    })
// ,graphql(LOGGED_IN_USER_QUERY, {
//   name: 'loggedInUserQuery',
//   options: { fetchPolicy: 'network-only' }
// })
)(withRouter(Login))