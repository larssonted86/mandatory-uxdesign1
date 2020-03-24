import React, { Component, createRef } from 'react'
import'../styles/css/TextFieldFilled.css'


export class TextFieldFilled extends Component {
  textInput = createRef()
  textLabel = createRef()

  focusTextInput = () => this.textInput.current.focus();

  render() {
    console.log(this.textInput)
    // if(this.textInput.value !==''){
    //   this.textLabel.classList.add('floating')
    // }
    return (
      <div  id='textContainer'
      className="textContainer"
      onClick = {this.focusTextInput}>
        <input
        ref={this.textInput} 
        type='text'
        className='textInput' 
        defaultValue = 'test'
        >         
        </input>
        <label
        ref={this.textLabel}  
        className='textLabel'>Text</label>        
      </div>
    )
  }
}
// className={"loader " + (fetchSuccess? "hide":"")}
export default TextFieldFilled
