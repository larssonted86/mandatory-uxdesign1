import React, { Component } from 'react'
import DemoPage from './components/DemoPage'
import'./App.css'


export class App extends Component {
  render() {
    return (
      <div className = 'appContainer'>
        <DemoPage />
      </div>
    )
  }
}

export default App
