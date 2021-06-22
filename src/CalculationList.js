import React from 'react';
import './CalculationList.css';




class CalculationList extends React.Component{
       
  
    render() 
    {
      let array = [];


// console.log(props.numbers.length())
if(this.props.numbers != null){
for(let i = 0; i < this.props.numbers.length; i++) {
  array.push(
    // <Item key={this.props.numbers[i].id} item={
    <div class="wrapper">
              <div class ="item">
                <span class="text"> {this.props.numbers[i].operand1} {convert(this.props.numbers[i].operation)} {this.props.numbers[i].operand2}  =  {this.props.numbers[i].answer}</span>
               <i onClick = {()=>this.props.onDelete(this.props.numbers[i].id)} class="fa fa-trash" ></i>
              </div>
             
            </div>
            // } />
  );
}
}
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
  
 /*
  alternate solution

//  const numbers = props.numbers;
//  console.log(numbers);
//  const listItems = numbers.map((model) =>
   
//    <ul key={model.id}class="models">
             
//              <div class="wrapper">
//              <div class ="item">
//                <span class="text"> {model.operand1} {convert(model.operation)} {model.operand2}  =  {model.answer}</span>
//                <i onClick = {props.delEvent} class="fa fa-trash"></i>
//               </div>
             
//              </div>
             
//                   </ul>
 
 

*/
   
          return(
                <div>{array}</div>
          );
    }

  }


export default CalculationList;