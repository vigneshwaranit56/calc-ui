import React from 'react';
import './Merge.css';

class ResultComponent extends React.Component {


    render() {
            let {result} = this.props;
            return (
                <div className="result">
                    <p>{result}</p>
                </div>
            );
    
    }
}
export default ResultComponent;