import React, { Component } from 'react'
import { HIDE_DISCLAIMER } from '../constants';
import '../styles/disclaimer.css'
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
          <br />
          (Check the box at right: never see this message again.)
        
            <div className={this.state.neverAgain ? 'fakeCheckBox checked' : 'fakeCheckBox unchecked'}
                   onClick={(e) => {
                     this.setState({
                       neverAgain: !this.state.neverAgain
                     });
                   }}
            />
        
        <button className='hide' onClick={() => {
          console.log("Clicked: ", this.state.neverAgain)
          localStorage.setItem(HIDE_DISCLAIMER, this.state.neverAgain);
          this.props.hideDisclaimer();
        }}>Hide disclaimer</button>
      </div>
    )
  }
}

export default Disclaimer