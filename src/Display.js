import React from 'react';

import './Display.css';


class Display extends  React.Component {
  render(){
    console.log("Display log:::;"+this.props.model);
    const result = this.props.model.result;
    console.log("result log:::;"+result);
    const answer = this.props.model.answer;
    console.log("answer log:::;"+answer);

    console.log(JSON.stringify(this.props.model))

    function resultModel(){
      if(result)
        return result;
        else
        return answer;
      
      
    };

    return (
      <div class = "Display">
        <div class = "Result">{resultModel()}</div>

      </div>
    );
       

    }         
     
}

export default Display; 









