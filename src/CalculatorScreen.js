import React , {Component} from 'react';
import  './Merge.css'

class CalculatorScreen extends Component{

    constructor(){
        super();
    
        this.state = {
            result: ""
        }
    }
    
    onClick = button => {
    
        if(button === "="){
            this.calculate()
        }
    
        else if(button === "AC"){
            this.reset()
        }
        else if(button === "Delete"){
            this.backspace()
        }
    
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
    
    
    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }
    
        else {
            checkResult = this.state.result
        }
       try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
    
        }
    };
    
    reset = () => {
        this.setState({
            result: ""
        })
    };
    
    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };
       render(){
        return(
         <div class="calculator">
             <div className="Display">
             
              </div>
          <button name="Check" onClick={e => this.props.onClick(e.target.name)} class="CheckDelete">Check</button>
          
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

export default CalculatorScreen;