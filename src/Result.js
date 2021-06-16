import React from 'react';


class Result extends React.Component {


    render() {
            let {result} = this.props;
            return (
                <div class="result">
                    <p>{result}</p>
                </div>
            );
    
    }
}
export default Result;