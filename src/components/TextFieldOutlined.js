import React, { Component, createRef } from 'react'
import'../styles/css/TextFieldOutlined.css'


export class TextFieldOutlined extends Component {
  textInput = createRef()
  textLabel = createRef()

  focusTextInput = () => this.textInput.current.focus();

  render() {    
    return (
      <div  id='textOutlinedContainer'
      className="textOutlinedContainer"
      onClick = {this.focusTextInput}>
        <input
        ref={this.textInput} 
        type='text'
        className='textInput'
        value = {this.props.outlinedvalue}
        onChange = {this.props.setOutlinedValue}
        >         
        </input>
        <label
        ref={this.textLabel}  
        className={"textLabel" + (this.props.outlinedvalue? "float":"")}>Text</label>        
      </div>
    )
  }
}

export default TextFieldOutlined
