import React  from 'react';
import './ClearHistoryStyle.css';
import CalculationList from './CalculationList.js';


class ClearHistoryScreen extends React.Component{
 
       render() {
            return(
              <div className='App'>
                <div id='d1'>
                  <div>
                <CalculationList> </CalculationList>
                </div>
                
                </div>
               <button type="reset">ClearHistory</button>
               </div>
               
            );  
        }
}


export default ClearHistoryScreen;