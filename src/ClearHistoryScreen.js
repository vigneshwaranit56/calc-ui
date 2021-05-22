import React  from 'react';
import './ClearHistoryStyle.css';
import CalculationList from './CalculationList.js';
import './clearhistorybg.css';

class ClearHistoryScreen extends React.Component{
 
       render() {
            return(
                     <div className='App'>
                            <div>
                                  <CalculationList> </CalculationList>
                            </div>
                            <button type="reset">ClearHistory</button>
                            </div>
                         );  
        }
}


export default ClearHistoryScreen;