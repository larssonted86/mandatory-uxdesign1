import React, { Component } from 'react'
import '../styles/css/radiobutton.css'

export class Radiobuttons extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='radioButtonContainer'>        
        <div className="RadioButton">
            <input id={this.props.id} onChange={this.props.changed} value={this.props.value} type="radio" checked={this.props.isSelected} />
            <label htmlFor={this.props.id}>{this.props.label}</label>
        </div>
        
      </div>
    )
  }
}

export default Radiobuttons
