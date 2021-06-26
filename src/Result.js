import React from 'react';


class Result extends React.Component {


    render() {
            let {result} = this.props;
            return (
               
                    <p>{result}</p>
               
            );
    
    }
}
export default Result;