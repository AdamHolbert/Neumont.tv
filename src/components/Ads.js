import React, {Component} from 'react'
import '../styles/ads.css'
import AdSense from 'react-adsense';

class Ads extends Component {

    render() {
        return (
            <div className='Ads'>
                <AdSense.Google client='ca-pub-7292810486004926'
                                slot='7806394673'
                                style={{width: 500, height: 300}}
                                format='' />
            </div>
        )
    }
}

export default Ads