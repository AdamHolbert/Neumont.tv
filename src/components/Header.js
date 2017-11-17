import React, { Component } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

class Header extends Component {

    render() {
        const userId = localStorage.getItem(GC_USER_ID)
        return (
            <div>
                <div>
                    <div>Hacker News</div>
                    <Link to='/'>new</Link>
                    {userId &&
                    <div>
                        <div>|</div>
                        <Link to='/create'>submit</Link>
                    </div>
                    }
                </div>
                <div>
                    {userId ?
                        <div onClick={() => {
                            localStorage.removeItem(GC_USER_ID)
                            localStorage.removeItem(GC_AUTH_TOKEN)
                            this.props.history.push(`/`)
                        }}>logout</div>
                        :
                        <Link to='/login'>login</Link>
                    }
                </div>
                <Search />
            </div>
        )
    }

}

export default withRouter(Header)