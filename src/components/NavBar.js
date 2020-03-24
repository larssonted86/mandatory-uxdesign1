import React, { Component } from 'react'
import '../styles/css/NavBar.css'
import {ReactComponent as Home} from '../styles/images/home.svg';
import {ReactComponent as TextfieldIcon} from '../styles/images/textfieldIcon.svg';
import {ReactComponent as CheckboxIcon} from '../styles/images/checkboxIcon.svg';


export class NavBar extends Component {
  render() {
    return (      
      <div className = 'navBar'>
        <label id = 'Home' 
        className = 'navLabel active'
        onClick = {this.props.onClick}>
        <Home  className = 'navIcon'/>
        Home
        </label>
        <label id = 'Textfields' 
        className = 'navLabel' 
        onClick = {this.props.onClick}>
        <TextfieldIcon  className = 'navIcon'/>
        Textfields
        </label>
        <label id = 'Selectors' 
        className = 'navLabel' 
        onClick = {this.props.onClick}>
        <CheckboxIcon  className = 'navIcon'/>
        Selectors
        </label>        
      </div>
    )
  }
}

export default NavBar
