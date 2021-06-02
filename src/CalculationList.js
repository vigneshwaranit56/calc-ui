import React from 'react';
import './CalculationList.css';




class CalculationList extends React.Component{
       
  
    render() {
      
      function convertoperation(operation){
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
                          <span class="text"> {model.operand1} {convertoperation(model.operation)} {model.operand2}  =  {model.answer}</span>
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
          
          var models=[{"id": 1, "operand1": -6.0, "operand2": -100.0, "operation": "mul", "answer": 600.0}, 
                        {"id": 2, "operand1": -6.0, "operand2": -100.0, "operation": "mul", "answer": 600.0}, 
                        {"id": 3, "operand1": -6.0, "operand2": -100.0, "operation": "mul", "answer": 600.0}, 
                        {"id": 4, "operand1": -6.0, "operand2": -100.0, "operation": "mul", "answer": 600.0}, 
                        {"id": 5, "operand1": -6.0, "operand2": -100.0, "operation": "mul", "answer": 600.0}, 
                        {"id": 6, "operand1": -6.0, "operand2": -100.0, "operation": "mul", "answer": 600.0}, 
                        {"id": 7, "operand1": -6.0, "operand2": -100.0, "operation": "mul", "answer": 600.0}, 
                        {"id": 8, "operand1": -6.0, "operand2": -100.0, "operation": "mul", "answer": 600.0}, 
                        {"id": 9, "operand1": 8.0, "operand2": 100.0, "operation": "add", "answer": 108.0}, 
                        {"id": 10, "operand1": 8.0, "operand2": 100.0, "operation": "add", "answer": 108.0}, 
                        {"id": 11, "operand1": 8.0, "operand2": 200.0, "operation": "add", "answer": 208.0}, 
                        {"id": 12, "operand1": 8.0, "operand2": 200.0, "operation": "mul", "answer": 1600.0}, 
                        {"id": 13, "operand1": 8.0, "operand2": 200.0, "operation": "mul", "answer": 1600.0}, 
                        {"id": 14, "operand1": 8.0, "operand2": 200.0, "operation": "mul", "answer": 1600.0}, 
                        {"id": 15, "operand1": 8.0, "operand2": 200.0, "operation": "mul", "answer": 1600.0}, 
                        {"id": 16, "operand1": 8.0, "operand2": 200.0, "operation": "mul", "answer": 1600.0}, 
                        {"id": 17, "operand1": 8.0, "operand2": 200.0, "operation": "mul", "answer": 1600.0},
                        {"id": 18, "operand1": 8.0, "operand2": 200.0, "operation": "mul", "answer": 1600.0}, 
                        {"id": 19, "operand1": 8.0, "operand2": 200.0, "operation": "mul", "answer": 1600.0}, 
                        {"id": 20, "operand1": 8.0, "operand2": 200.0, "operation": "mul", "answer": 1600.0}, 
                        {"id": 21, "operand1": 8.0, "operand2": 200.0, "operation": "mul", "answer": 1600.0}, 
                        {"id": 22, "operand1": 8.0, "operand2": 200.0, "operation": "mul", "answer": 1600.0}, 
                        {"id": 23, "operand1": 8.0, "operand2": 200.0, "operation": "mul", "answer": 1600.0}, ];
         
          return(
           
            <div>
            <NumberList numbers={models}>
                  
            </NumberList>
        </div>
          );
    }

  }


export default CalculationList;