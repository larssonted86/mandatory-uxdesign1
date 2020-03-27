import React, { Component } from 'react'
import '../styles/css/switches.css'

export class Switches extends Component {
  state={
    checked:'',
  }

  checkChange = (e) =>{
    this.setState({
      checked: e.target.checked
    })
  }
  
  render() {
    return (
      <div className = 'switchContainer'>
        <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
        </label>
      </div>
    )
  }
}

export default Switches
