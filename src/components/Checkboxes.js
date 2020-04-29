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
                htmlFor = {this.props.id}
                className = 'checkedCheckbox'        
                onChange = {this.checkChange}
                alt = 'checked'
                />
      

     default: 
     return <Unchecked 
              htmlFor = {this.props.id}
              className = 'unCheckedCheckbox'           
              onChange = {this.checkChange}
              alt = 'unchecked'
              />
    }
  }

  checkChange = (e) =>{
    this.setState({
      checked: e.target.checked
    })
  }

  render() {
    return (
      <div className='checkboxContainer'>        
        <input 
        id = {this.props.id}
        type = 'checkbox'
        className = 'originalCheckbox'
        onClick = {this.checkChange}
        disabled = {this.props.disabled}        
        ></input>
        <label 
        htmlFor = {this.props.id}
        onClick = {this.checkChange}        
        >
        {this.toggleImage(this.state.checked)}
        <div className = 'rippleTarget'></div>
        </label>
      </div>
    )
  }
}

export default Checkboxes
