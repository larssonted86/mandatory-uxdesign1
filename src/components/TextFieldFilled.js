import React, { Component, createRef } from 'react'
import'../styles/css/TextFieldFilled.css'


export class TextFieldFilled extends Component {
  textInput = createRef()
  textLabel = createRef()

  focusTextInput = () => this.textInput.current.focus();

  render() {    
    return (
      <div  id='textContainer'
      className="textContainer"
      onClick = {this.focusTextInput}>
        <input
        ref={this.textInput} 
        type='text'
        className='textInput'
        value = {this.props.value}
        onChange = {this.props.setValue}
        >         
        </input>
        <label
        ref={this.textLabel}  
        className={"textLabel" + (this.props.value? "float":"")}>Text</label>        
      </div>
    )
  }
}
export default TextFieldFilled
