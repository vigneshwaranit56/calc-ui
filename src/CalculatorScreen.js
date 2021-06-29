import React , {Component} from 'react';
import './CalculatorScreen.css';
import Calculator from'./Calculator.js'

class CalculatorScreen extends Component{
    render(){
        return (<div class='Background'>
            <Calculator></Calculator>
        </div>);
    }
}

export default CalculatorScreen;