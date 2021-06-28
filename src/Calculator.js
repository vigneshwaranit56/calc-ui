import React , {Component} from 'react';
import './Calculator.css';
import Display from './Display.js'
import Keypad from './Keypad.js'
import Button from './Button.js'
import ClearHistoryScreen from './ClearHistoryScreen';



class Calculator extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    
    state ={
        ///data = {
            operand1: "",
            operand2: "",
            operation: "",
            answer:"",
            result: "",
            isOperand1:true,
            isOperand2:false
      //  }
        
    }

    saveCalculation(){
        console.log(JSON.stringify(this.state))
        let url="https://calculate-application-django.herokuapp.com/api/calculation";
        let data = this.state;
        fetch(url,{
         method:'POST',
         header: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
         },
         body:JSON.stringify(data)

       }).then((result) => {
        result.json().then((resp)=>{
        console.warn("resp",resp);
        console.warn("answer",resp.answer);

        this.setState({ result:null, answer:resp.answer })

        console.log(this.answer);
        })
       })
    }

    handleClick = (e)=>{
        const value = e.target.getAttribute('data-value');
console.log(value);
        switch(value){
            case 'check':
                break;
            case 'Correct Delete':
                break;
            case 'history':

                break;
            case 'Auto Replay':
                if(this.state.operand1 === "")
                break;

                this.setState({result:this.state.operand1+" "+this.convert(this.state.operation)+" "+this.state.operand2})
                break;
            case '*':
                this.setState({operation: 'mul',isOperand2:true,isOperand1:false,answer:'*'})
                break;
            case '/':
                this.setState({operation: 'div',isOperand2:true,isOperand1:false,answer:'/'})
                break;
            case '+':
                this.setState({operation: 'add',isOperand2:true,isOperand1:false,answer:'+'})
                break;
            case '-':
                this.setState({operation: 'sub',isOperand2:true,isOperand1:false,answer:'-'})
                break;
            case '=':
                this.saveCalculation();
                break;
            case '%':
        //        this.setState({operation: 'mod',isOperand2:true,isOperand1:false})
                break;
            case 'AC':
                this.setState({operation: "",isOperand2:false,isOperand1:true,operand1:"",operand2:"",result:"",answer:""})
                break;
            default:{
                
                if(this.state.isOperand1){
                    let  operand1 = null;
                    console.log(typeof operand1);
                    if(this.state.isOperand1 !== null)
                    operand1= this.state.operand1+value;
                    this.setState({operand1: operand1,answer:operand1})

                }else if(this.state.isOperand2){
                    let    operand2  = null;
                    console.log(typeof operand2);

                    if(this.state.isOperand2 != null)
                        operand2 = this.state.operand2+value;
                  
                    this.setState({operand2:operand2,answer:operand2})

                }
            }
        }
    }
    
     convert(operation){
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
    render(){
        
        return (
            
        <div class='Calculator'>
            
            <Display model ={this.state}/> 
            <div>
            <Keypad size ="1">
            <Button onClick={this.handleClick} label="CHECK"  size ="2" value="check"/>
        <Button onClick={this.handleClick} label="Correct Delete" size ="2" value="Correct Delete"/>
        <Button onClick={this.handleClick} label="Replay" size ="1" value="Auto Replay"/>   
            </Keypad>  
            </div>
            


        <Keypad>  
            

        <Button onClick={this.handleClick} label="1" value="1"/>
        <Button onClick={this.handleClick} label="2" value="2"/>
        <Button onClick={this.handleClick} label="3" value="3"/>
        <Button onClick={this.handleClick} label="/" value="/"/>
        <Button onClick={() =>{
            console.log("history");
            return <ClearHistoryScreen/>
        }} size ="3" label={<i class="fas fa-history"></i>} value="history"/>

        <Button onClick={this.handleClick} label="4" value="4"/>
        <Button onClick={this.handleClick} label="5" value="5"/>
        <Button onClick={this.handleClick} label="6" value="6"/>
        <Button onClick={this.handleClick} label="*" value="*"/>
        <Button onClick={this.handleClick} size ="3" label="AC" value="AC"/>
       
        <Button onClick={this.handleClick} label="7" value="7" />
        <Button onClick={this.handleClick} label="8" value="8" />
        <Button onClick={this.handleClick} label="9" value="9" />
        <Button onClick={this.handleClick} label="-" value="-" />
        <Button onClick={this.handleClick} label="=" value="=" />

        <Button onClick={this.handleClick} label="0" value="0" />
        <Button onClick={this.handleClick} label="00" value="00" />
        <Button onClick={this.handleClick} label="." value="." />
        <Button onClick={this.handleClick} label="+" value="+" />
        <Button onClick={this.handleClick} label="%" value="%" />

            </Keypad>
        </div>);
    }
}

export default Calculator;