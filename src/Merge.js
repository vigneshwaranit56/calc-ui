import React from 'react';
import './Merge.css';
import ResultComponent from './ResultComponent';
import Mainscreen from './Display';

class Merge extends Components {
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

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
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
                <div className="calculator">
                    <div className="calculatorbuttons">
                       <div className="Display">
                           <div className="InnerDislay">
                    <Resultcomponent result={this.state.result}/>
                    <Display onClick={this.onClick}/>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Merge;