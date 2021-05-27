import React  from 'react';
import './ClearHistoryStyle.css';
import CalculationList from './CalculationList.js';
import './CalculationList.css';





class ClearHistoryScreen extends React.Component{
      
      
       render() {
            return(
              <div>
                     <div className='container'>
                     <CalculationList> </CalculationList>
                     </div>
                     <button type="reset">ClearHistory</button>
                     </div>
                     
                     
                              
               
            );  
        }
}


export default ClearHistoryScreen;