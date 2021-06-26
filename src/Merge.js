import React from 'react';
import './Merge.css';
import Result from './Result';
import Mainscreen from './Mainscreen';

class Merge extends React.Component {

   render() {
        return (
            <div>
                  <Mainscreen onClick={this.onClick}/>
            </div>
        );
    }
}

export default Merge;