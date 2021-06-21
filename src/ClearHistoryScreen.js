import React  from 'react';
import './ClearHistoryStyle.css';

import Get from './component/get'

class ClearHistoryScreen extends React.Component{

       render() {
            return(
              <div>
                     <div className='container'>
                     <Get> </Get>
                     </div>
                     <button>ClearHistory</button>
                   
                     <div>
                      <i class="fas fa-arrow-alt-circle-left"></i>
                     </div>
                
                     </div>
                     
                     )
                
        }
      
        
};



export default ClearHistoryScreen;