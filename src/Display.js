import React from 'react';



class Display extends  React.Component {
  render(){
    
    return(
      
    
     <div class="Calculator">
      <button name="Check" onClick={e => this.props.onClick(e.target.name)} class="Check">Check</button>
      <button name="CorrectDelete" onClick={e => this.props.onClick(e.target.name)}class="CorrectDelete">CorrectDelete</button>

      <button name="AutoReplay" onClick={e => this.props.onClick(e.target.name)} class="AutoReplay">AutoReplay</button>

      <div class="calculatorbuttons">
      <button name="1" onClick={e => this.props.onClick(e.target.name)} class="button">1</button>
        <button  name="2"onClick={e => this.props.onClick(e.target.name)} class="button">2</button>
        <button name="3"onClick={e => this.props.onClick(e.target.name)} class="button">3</button>
        <button name="/" onClick={e => this.props.onClick(e.target.name)} class="button">/</button>
        <button type="button" value="history"class="button1"><i class="fas fa-history"></i></button>

        <button name="4"onClick={e => this.props.onClick(e.target.name)}  class="button">4</button>
        <button name="5"onClick={e => this.props.onClick(e.target.name)}  class="button">5</button>
        <button name="6"onClick={e => this.props.onClick(e.target.name)}  class="button">6</button>
        <button name="*" onClick={e => this.props.onClick(e.target.name)} class="button">*</button>
        <button name="AC" onClick={e => this.props.onClick(e.target.name)} class="button1">AC</button>
       
        <button name="7"onClick={e => this.props.onClick(e.target.name)}  class="button">7</button>
        <button name="8"onClick={e => this.props.onClick(e.target.name)}  class="button">8</button>
        <button name="9"onClick={e => this.props.onClick(e.target.name)}  class="button">9</button>
        <button name="-" onClick={e => this.props.onClick(e.target.name)} class="button">-</button>
        <button name="=" onClick={e => this.props.onClick(e.target.name)} class="button">=</button>

        <button name="0"onClick={e => this.props.onClick(e.target.name)}  class="button">0</button>
        <button name="00"onClick={e => this.props.onClick(e.target.name)}  class="button">00</button>
        <button name="." onClick={e => this.props.onClick(e.target.name)} class="button">.</button>
        <button name="+" onClick={e => this.props.onClick(e.target.name)} class="button">+</button>
        <button name="%" onClick={e => this.props.onClick(e.target.name)} class="button">%</button>
     </div>

    

     </div>

     
        

        
         
             
         
   
    )

    }         
     
}

export default Display; 