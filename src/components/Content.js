import React, { Component } from 'react'
import Home from './Home'
import TextFieldFilled from './TextFieldFilled'
import TextFieldOutlined from './TextFieldOutlined'
import Checkboxes from './Checkboxes'
import Radiobuttons from './Radiobuttons'
import Switches from './Switches'

import '../styles/Content.css'



export class Content extends Component {

 renderContentSwitch = (content) => {
    switch(content){
      case 'Textfields':
        return <div>
          <TextFieldFilled /> 
          <TextFieldOutlined />
        </div>;

        case 'Selectors':
          return <div>
          <Checkboxes />
          <Radiobuttons />
          <Switches />
        </div>;

        default:
          return <div>
            <Home />
          </div>
    }
  }
  render() {
    console.log(this.props.content)

    return (
      <div className = 'content'>
        {this.renderContentSwitch(this.props.content)}
      </div>
    )
  }
}

export default Content
