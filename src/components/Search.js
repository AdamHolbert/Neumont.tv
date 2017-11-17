import React, { Component } from 'react'
import { GC_USER_ID } from '../constants'


class Homepage extends Component {
    state = {
        searchBox: '',
    }
    userId = localStorage.getItem(GC_USER_ID)
    render() {
        return (
            <div>
                <div className='search'>
                    <input className='searchBox'
                        value={this.state.searchBox}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        type='text'
                        placeholder='Create A Search Here'
                    />
                    <div className='searchType'>
                    <select>
                        <option value="volvo">Tags</option>
                        <option value="saab">Keyword</option>
                        <option value="opel">Title of Video</option>
                        <option value="audi">Channel Name</option>
                    </select>
                    </div>
                    <div className='searchButton'><button type="button">Search</button></div>

                </div>
            </div>

        )
    }
}

export default Homepage