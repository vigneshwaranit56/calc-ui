import React , {Component} from 'react';
import '../CalculationList.css';
import CalculationList from '../CalculationList.js';



class Get extends Component
{
    state={
          loading: true,
          data: null
          };

      async componentDidMount(){
      const url ="https://calculate-application-django.herokuapp.com/api/calculation";
      const response = await fetch(url);
      console.log(this.state.data)

      const data = await response.json();
      console.log(typeof data);
      /*
      commenting below line to ignore stringfy
      const myObjStr = JSON.stringify(data);
    */
       this.setState({data: data, loading: false });

   }


render() 

{
  /*
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
 /*
 have to work on the solution, can't able to convert to array so that map not working

 console.log(typeof props.numbers );

 const numbers = props.numbers;
 console.log(numbers);



//  const jsonValues =JSON.parse(Object.assign({}, numbers))
//  console.log(jsonValues.length);
 const listItems = numbers.map((model) => console.log(model));
   
//    <ul key={model.id}class="models">
             
//               <div class="wrapper">
//               <div class ="item">
//                 <span class="text"> {model.operand1} {convert(model.operation)} {model.operand2}  =  {model.answer}</span>
//                 <i onClick = {props.delEvent} class="fa fa-trash"></i>
//           </div>
             
//         </div>
//                                 </ul>
//  );
*/
 

/*

let array = [];
console.log(typeof props.numbers );
console.log(props.numbers);
console.log(props.numbers );

// console.log(props.numbers.length())
if(props.numbers != null){
for(let i = 0; i < props.numbers.length; i++) {
  array.push(
    //<Item key={i} item={props.items[i]} />
    <div class="wrapper">
              <div class ="item">
                <span class="text"> {props.numbers[i].operand1} {convert(props.numbers[i].operation)} {props.numbers[i].operand2}  =  {props.numbers[i].answer}</span>
                <i onClick = {props.delEvent} class="fa fa-trash"></i>
              </div>
             
            </div>
  );
}
}

 return (
 
   <div>
     {
     array
              }
    
   </div>
   
 );

}*/
return (

 (this.state.loading ) || (!this.state.data) ? (<CalculationList />) : ( <CalculationList numbers = { this.state.data} />)
  
  );

}
}

export default Get;