import React  from 'react';
import './ClearHistoryStyle.css';

// import Get from './component/get'
import CalculationList from './CalculationList.js';

class ClearHistoryScreen extends React.Component{

   state={
      loading: true,
      data: null
      };

      constructor(props) {
        super(props)
        this.deletebyid = this.deletebyid.bind(this)
    }

  async componentDidMount(){
     console.log(this.props)
  const url ="https://calculate-application-django.herokuapp.com/api/calculation";
  const response = await fetch(url);

  const data = await response.json();
  console.log(typeof data);
  /*
  commenting below line to ignore stringfy
  const myObjStr = JSON.stringify(data);
*/
   this.setState({data: data, loading: false });

}

deletebyid(id){

const items = this.state.data.filter(model => model.id !== id);
console.log(items);

this.setState({data: items, loading: false });



    console.log(JSON.stringify(id))
    let url="https://calculate-application-django.herokuapp.com/api/calculation/"+id;

    fetch(url,{
     method:'DELETE',
     header: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
     },


   }).then((result) => {
    console.warn("resp",result.status)
    
   })


}
       deleteall()
       {
         const items = [];
         console.log(items);
         
         this.setState({data: items, loading: false });
         
           let url="https://calculate-application-django.herokuapp.com/api/calculation";
           fetch(url,{
            method:'DELETE',
            header: {
               'Accept': 'application/json',
               'Content-type': 'application/json',
            },
   
          }).then((result) => {
           console.warn("resp",result.status)
          })
   
       }
   
       render() {


            return(
              <div>
                     <div className='container'>
                        {
                            (this.state.loading ) || (!this.state.data) ? (
                              <CalculationList />
                            ) : ( <CalculationList numbers = { this.state.data} onDelete ={this.deletebyid}/>)

                        }
                     </div>
                     <button onClick={()=> this.deleteall()}>ClearHistory</button>
                   
                     <div>
                      <i class="fas fa-arrow-alt-circle-left" onClick={this.props.onBack}></i>
                     </div>
                
                     </div>
                     
                     )
                
        }
      
        
};



export default ClearHistoryScreen;