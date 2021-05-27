import React from 'react';
import './CalculationList.css';




class CalculationList extends React.Component{
       
     
   
    render() {
        function NumberList(props) 
           {
            const numbers = props.numbers;
            console.log(numbers);
           const listItems = numbers.map((model) =>
              
              <li key={model.id}>
                        {model.operand1+" "+model.operand2+" "+model.operation+" "+model.answer}
                             </li>
            );
            
            return (
            
              <div>
                {listItems}
              </div>
              
            );
          }
          
          const models=[{"id": 1, "operand1": -6.0, "operand2": -100.0, "operation": "mul", "answer": 600.0}, 
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
           
            <ul>
            <div id ="models">
              </div>
            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
               
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
               
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
                
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
                
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
               
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
                
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
               
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
                
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
               
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
                
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
              
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
                
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
                
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
                
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
                
            </div>
            </div>

            <div class="wrapper">
              <div class ="item">
                <span class="text">-6-100 mul 600</span>
                
            </div>
            </div>

            </ul>
          );
    }

  }


export default CalculationList;