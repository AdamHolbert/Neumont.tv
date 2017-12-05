import React, { Component } from 'react'
import { GC_USER_ID } from '../constants'
import '../styles/search.css'
import Upload from "./Upload";


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
                    <div className='searchButton'>SEARCH</div>
                </div>
            </div>

        )
    }
}

export default Homepage