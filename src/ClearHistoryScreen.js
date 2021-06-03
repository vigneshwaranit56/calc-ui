import React  from 'react';
import './ClearHistoryStyle.css';
import CalculationList from './CalculationList.js';
import './CalculationList.css';
import ClearHistoryfunc from './ClearHistoryfunc.js';

class ClearHistoryScreen extends React.Component{

       render() {
            return(
              <div>
                     <div className='container'>
                     <CalculationList> </CalculationList>
                     </div>
                     <button>ClearHistory</button>
                     <ClearHistoryfunc></ClearHistoryfunc>
                     <div>
                      <i class="fas fa-arrow-alt-circle-left"></i>
                     </div>
                     
                     </div>
                     )
                
        }
      
        
};



export default ClearHistoryScreen;