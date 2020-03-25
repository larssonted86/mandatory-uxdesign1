import React, { Component } from 'react'
import '../styles/css/checkbox.css'


export class Checkboxes extends Component {
  state={
    checked:false,
  }

  checkChange = (e) =>{
    this.setState({
      checked: e.target.checked
    })
  }
  render() {
    return (
      <div className='container'>        
        <input 
        type='checkbox'
        className = 'originalCheckbox'
        onChange = {this.checkChange}
        />
        <div 
        className = 'customCheckmark'
        ></div>
        <label>option</label>
      </div>
    )
  }
}

export default Checkboxes
