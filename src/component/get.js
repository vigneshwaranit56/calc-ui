import React , {Component} from 'react';
import CalculationList from './CalculationList';



class Get extends Component
{
    state={
          loading: true,
          data: null
          };

      async componentDidMount(){
      const url ="https://calculate-application-django.herokuapp.com/api/calculation";
      const response = await fetch(url);

      //console.log(response.json())
      const data = await response.json();
      const myObjStr = JSON.stringify(data);
      console.log(myObjStr);
      this.setState({data: myObjStr, loading: false });

   }


render() {
return (
  
       <CalculationList data={this.state}/>
 
  );
}

}

export default Get;