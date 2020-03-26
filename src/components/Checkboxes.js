import React, { Component } from 'react'
import '../styles/css/checkbox.css'
import {ReactComponent as Checked} from '../styles/images/checkedcheckbox.svg';
import {ReactComponent as Unchecked} from '../styles/images/uncheckedcheckbox.svg';


export class Checkboxes extends Component {
  state={
    checked:'',
  }

  toggleImage = (state) => {
    switch(state){
      case true:
      return <Checked 
                htmlFor = 'originalCheckbox'
                className = 'checkboxIcon'        
                onChange = {this.checkChange}
                alt = 'checked'/>
      

     default: 
     return <Unchecked 
              htmlFor = 'originalCheckbox'
              className = 'checkboxIcon'           
              onChange = {this.checkChange}
              alt = 'unchecked'/>
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
        id = 'originalCheckbox'
        type = 'checkbox'
        className = 'originalCheckbox'
        onChange = {this.checkChange}

        ></input>
        <label 
        htmlFor = 'originalCheckbox'
        onChange = {this.checkChange}
        >
        {this.toggleImage(this.state.checked)}
        </label>
      </div>
    )
  }
}

export default Checkboxes
