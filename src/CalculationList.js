import React from 'react';
import './CalculationList.css';




class CalculationList extends React.Component{
       
  
    render() {
      
      function convert(operation){
        var val;
      switch(operation) {

        
        case 'mul':
        val = '*';
          break;
        case 'div':
          val = '/'  ;
          break;
        case 'add':
          val = '+'
          break;
        case 'sub':
          val = '-'
          break;
        default:
          val = null;
}
return val;
}
  
        function NumberList(props) 
           {
            const numbers = props.numbers;
            console.log(numbers);
           const listItems = numbers.map((model) =>
              
              <ul key={model.id}class="models">
                        
                        <div class="wrapper">
                        <div class ="item">
                          <span class="text"> {model.operand1} {convert(model.operation)} {model.operand2}  =  {model.answer}</span>
                          <i onClick = {props.delEvent} class="fa fa-trash"></i>
                         </div>
                        
                        </div>
                        
                             </ul>
            );
            
            return (
            
              <div>
                {listItems}
               
              </div>
              
            );
          }
          console.log("log data"+this.props.data);
          
          return(
                
           <div></div>
          );
    }

  }


export default CalculationList;