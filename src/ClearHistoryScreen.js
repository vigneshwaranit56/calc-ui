import React  from 'react';
import './ClearHistoryStyle.css';
import {Scrollbars} from "react-custom-scrollbars";


class ClearHistoryScreen extends React.Component{
  render(){
      
    return(
      <div className='App'>
          <button type="reset">ClearHistory</button>

         <scrollbars style={{width:"100%",height:"100%"}}>
           
         </scrollbars>
      
      </div>
    );
  
  }
 
}
export default ClearHistoryScreen;