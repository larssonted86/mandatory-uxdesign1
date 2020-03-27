import React, { Component, createRef } from 'react'
import'../styles/css/TextFieldFilled.css'


export class TextFieldFilled extends Component {
  textInput = createRef()
  textLabel = createRef()

  focusTextInput = () => this.textInput.current.focus();

  render() {    
    return (
      <div  id='textFilledContainer'
      className="textFilledContainer"
      onClick = {this.focusTextInput}>
        <input
        ref={this.textInput} 
        type='text'
        className='textInput'
        value = {this.props.filledvalue}
        onChange = {this.props.setFilledValue}
        >         
        </input>
        <label
        ref={this.textLabel}  
        className={"textLabel" + (this.props.filledvalue? "float":"")}>Text</label>        
      </div>
    )
  }
}
export default TextFieldFilled
