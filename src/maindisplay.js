import React  from 'react';
import './maindisplay.css';





class maindisplay extends React.Component{

       render() {
            return(
                <div class="calculator">
                <button class="CheckDelete">CheckDelete</button>
                
                <button class="CorrectDelete">CorrectDelete</button>
         
                  <button class="AutoReplay">AutoReplay</button>
         
                   <div style="top: 20px;"class="calculatorbuttons">
                       <button class="calc-button">1</button>
                       <button class="calc-button">2</button>
         
                       <button class="calc-button">3</button>
                       <button class="calc-button">/</button>
                        <button class="calc-button2">&</button>
                       <button class="calc-button">4</button>
                       <button class="calc-button">5</button>
         
                       <button class="calc-button">6</button>
                       <button class="calc-button">*</button>
                       <button class="calc-button2">AC</button>
                       <button class="calc-button">7</button>
         
                       <button class="calc-button">8</button>
                       <button class="calc-button">9</button>
                       <button class="calc-button">-</button>
                       <button class="calc-button">=</button>
         
                       <button class="calc-button">0</button>
                        <button class="calc-button">00</button>
                         <button class="calc-button">.</button>
                       <button class="calc-button">+</button>
                        <button class="calc-button">%</button>
                     </div>
         
            </div>
            
                     )
                
        }
      
        
};



export default maindisplay;