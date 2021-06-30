import React , {Component} from 'react';
import './CalculatorScreen.css';
import Calculator from'./Calculator.js'
import ClearHistoryScreen from './ClearHistoryScreen.js';

class CalculatorScreen extends Component{
    constructor(props) {
        super(props);
        this.changeScreen = this.changeScreen.bind(this);
        this.backToCalculator = this.backToCalculator.bind(this);
      }
    state={
        isClearHistoryScreen : false
    }
    changeScreen(){
        if(this.state.isClearHistoryScreen){
            alert("already your are in history screen")
        }
        this.setState({isClearHistoryScreen: true});
    }
    backToCalculator(){
        this.setState({isClearHistoryScreen: false});
    }
    /*
    ((this.isClearHistoryScreen) ?   <div>
                   <Calculator size="1" onBack= {this.backToCalculator}/> 
                   <ClearHistoryScreen />
              </div>  : <Calculator onHistory ={this.changeScreen}/> )
              */
    render(){
        return (<div class='Background'>
            
        {
                ((this.state.isClearHistoryScreen) ?   
                <div>
                    <Calculator size="1" /> 
                    <ClearHistoryScreen  onBack= {this.backToCalculator}/>
                </div>  
                : 
                <Calculator onHistory ={this.changeScreen}/> )                  
                                     
        }                                 
        </div>);
    }
}

export default CalculatorScreen;