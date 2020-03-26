import React, { Component } from 'react'
import '../styles/css/radiobutton.css'
import {ReactComponent as Checked} from '../styles/images/checkedradiobutton.svg';
import {ReactComponent as Unchecked} from '../styles/images/uncheckedradiobutton.svg';

export class Radiobuttons extends Component {
  state={
    checked:'',
  }

  toggleImage = (state) => {
    switch(state){
      case true:
      return <Checked 
                htmlFor = 'originalRadioButton'
                className = 'RadioButtonIcon'
                onChange = {this.checkChange}
                alt = 'checked'/>
      

     default: 
     return <Unchecked 
              htmlFor = 'originalRadioButton'
              className = 'RadioButtonIcon'
              onChange = {this.checkChange}
              alt = 'checked'/>
    }
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
        id = 'originalRadioButton'
        type = 'checkbox'
        className = 'originalCheckbox'
        onChange = {this.checkChange}

        ></input>
        <label 
        htmlFor = 'originalRadioButton'
        onChange = {this.checkChange}
        >
        {this.toggleImage(this.state.checked)}
        </label>
      </div>
    )
  }
}

export default Radiobuttons
