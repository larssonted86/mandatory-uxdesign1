import React, { Component } from 'react'
import Home from './Home'
import TextFieldFilled from './TextFieldFilled'
import TextFieldOutlined from './TextFieldOutlined'
import Checkboxes from './Checkboxes'
import Radiobuttons from './Radiobuttons'
import Switches from './Switches'

import '../styles/css/Content.css'



export class Content extends Component {
  

 renderContentSwitch = (content) => {
    switch(content){
      case 'Textfields':
        return <div>
          <TextFieldFilled 
          value = {this.props.value}
          setValue = {this.props.setValue}/> 
          <TextFieldOutlined />
        </div>;

        case 'Selectors':
          return <div>
          <Checkboxes id = 'checkbox1' />
          <Checkboxes id = 'checkbox2' />
          <Checkboxes id = 'checkbox3' />
          
          <Radiobuttons 
                        changed={ this.props.changed } 
                        id="1" 
                        isSelected={ this.props.selection === "option 1" } 
                        label="Option 1" 
                        value="option 1" 
                    />

                    <Radiobuttons
                        changed={ this.props.changed } 
                        id="2" 
                        isSelected={ this.props.selection === "option 2" } 
                        label="Option 2" 
                        value="option 2" 
                    />
          
          <Switches />
        </div>;

        default:
          return <div>
            <Home />
          </div>
    }
  }
  render() {
    return (
      <div className = 'content'>
        {this.renderContentSwitch(this.props.content)}
      </div>
    )
  }
}

export default Content
