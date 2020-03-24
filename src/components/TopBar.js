import React, { Component } from 'react'
import '../styles/css/TopBar.css'


export class TopBar extends Component {
  render() {
    return (
      <div className = 'topBar'>
        <h3 className = 'title'>{this.props.title}</h3>
      </div>
    )
  }
}

export default TopBar
