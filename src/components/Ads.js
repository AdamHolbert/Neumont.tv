import React, {Component} from 'react'
import AdSense from 'react-adsense';
import '../styles/App.css'

class Ads extends Component {

    render() {
        return (
            <div className='AdHolder'>
                <AdSense.Google client='ca-pub-7292810486004926'
                                slot='7806394673'
                                format='vertical' />
            </div>
        )
    }
}

export default Ads