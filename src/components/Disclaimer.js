import React, { Component } from 'react'
import { HIDE_DISCLAIMER } from '../constants';

class Disclaimer extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      neverAgain: false
    }
  }
  
  render() {
    return (
      <div className='disclaimer'>
        This website is not affiliated with, nor does anything said or posted on this website represent,
        the views of: Neumont College of Computer Science.
        
        <input type="checkbox"
               value={this.state.neverAgain}
               onChange={(e) => {
                 this.setState({
                   neverAgain: e.target.checked
                 });
               }}
        />
        
        <button onClick={() => {
          console.log("Clicked: ", this.state.neverAgain)
          localStorage.setItem(HIDE_DISCLAIMER, this.state.neverAgain);
          this.props.hideDisclaimer();
        }}>Hide disclaimer</button>
      </div>
    )
  }
}

export default Disclaimer