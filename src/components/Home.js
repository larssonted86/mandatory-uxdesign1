import React, { Component } from 'react'
import'../styles/css/Home.css'


export class Home extends Component {
  render() {
    return (
      <div className = 'homeContainer'>
        <h2>Welcome!</h2>
        <p>in this app you will find some examples of material components</p>
        <p>please use the navbar below to see the available komponents</p>
      </div>
    )
  }
}

export default Home
