import React from 'react';
import './Merge.css';
import Result from './Result';
import Display from './Display';

class Merge extends React.Component {
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
        else if(button === "CorrectDelete"){
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
                // eslint-disable-next-line
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

    render() {
            return (
            <div>
               
                    <Result  result={this.state.result}/>
                    <Display onClick={this.onClick}/>
                           </div>
                       
                    
                
            );
    }
}

export default Merge;