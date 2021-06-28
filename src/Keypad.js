import React, {Component} from 'react';

import './Keypad.css';


class Keypad extends  Component{
  render(){
    

    return (
      <div data-size={this.props.size} className = "Keypad">
          {
              this.props.children
          }
      </div>
    );
       

    }         
     
}

export default Keypad; 



