import React, { Component } from 'react'
import'../styles/TextFieldFilled.css'


export class TextFieldFilled extends Component {
  render() {
    return (
      <div className = 'container'>
        <div className = 'textfield'>
          <label className = 'label'>
            Label
            <input className = 'input'></input>
          </label>
        </div>
      </div>
    )
  }
}

export default TextFieldFilled
