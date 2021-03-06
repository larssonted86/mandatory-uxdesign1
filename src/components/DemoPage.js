import React, { Component } from 'react'
import'../styles/css/DemoPage.css'
import TopBar from './TopBar'
import NavBar from './NavBar'
import Content from './Content'

export class DemoPage extends Component {
  state = {
    nav: 'Home',
    filledvalue: '',
    outlinedvalue: '',
    selection: '',
  }

  radioChangeHandler = (event) => {

    this.setState({
        selection: event.target.value
    });
}

  setFilledValue = (e) => {
    this.setState({
      filledvalue: e.target.value
    })
  }

  setOutlinedValue = (e) => {
    this.setState({
      outlinedvalue: e.target.value
    })
  }

  navbarSelect = (e) =>{
    const currentLabel = document.querySelectorAll('.active')
    
    if(currentLabel.length !== 0){
      for(let i = 0; i < currentLabel.length; i+=1){
      currentLabel[i].className = 'navLabel'};    
    }    
    e.target.className += ' active'
    this.setState({
      nav: e.target.id,
    })
  } 
  render() {
    return (
      <div className = 'demoPage'>
        <TopBar title = {this.state.nav}/>
        <Content 
        content = {this.state.nav}
        filledvalue = {this.state.filledvalue}
        setFilledValue = {this.setFilledValue}
        outlinedvalue = {this.state.outlinedvalue}
        setOutlinedValue = {this.setOutlinedValue}
        selection = {this.state.selection}
        changed = {this.radioChangeHandler} />
        <NavBar onClick = {this.navbarSelect}/>
      </div>
    )
  }
}

export default DemoPage
