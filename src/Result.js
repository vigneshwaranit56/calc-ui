import React from 'react';
import './Result.css';
import './Merge.css';


class Result extends React.Component {
 
    render() {
            let {result} = this.props;
            return (
                <div className="result">
                    <p>{result}</p>
                </div>
            );
    
    }
}
export default Result;