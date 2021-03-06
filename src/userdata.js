import React from 'react';
import ReactDOM from 'react-dom';

export class PracticeData extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    }
}
controller = new AbortController();

componentDidMount() {

  this.mounted=true;
  const {signal} = this.controller;

  fetch('https://jsonplaceholder.typicode.com/users', {signal})
  .then(res => res.json())
  .then(json => {
    this.setState({   //triggers a rendering cycle
      isLoaded: true,
      data: json,
    })
  });
} 
componentWillUnmount(){
  this.isLoaded=false;
  this.controller.abort();
}
  render(){
   var { isLoaded, data } = this.state;
     if(!isLoaded) {
       return <div>Loading...</div>
     } else {
       return (
         <div className="container-fluid">
           <div className="row">{
             data.map(data => <div key={data.id}>
               <div className="list">
                 <li className="header">{data.name}</li>
               <div className="body">  
                 <li><strong>Company:</strong> {data.company.name}</li>
                 <li><strong>User Name: </strong> {data.username}</li>
                 <li><strong>Email: </strong> {data.email}</li>
                 <li><strong>Phone: </strong>{data.phone}</li>
               </div>
                 <li className="address"><strong>Address: </strong></li>
               <div className="body">
                 <li><strong>Street:</strong> {data.address.street}</li>
                 <li><strong>Suite: </strong> {data.address.suite}</li>
                 <li><strong>City: </strong> {data.address.city}<br/></li>
                 <li><strong>Zip Code:</strong> {data.address.zipcode}</li>
               </div>   
               </div>
               </div>
              )}
           </div>
          </div>
        );
      }
    }
  }
ReactDOM.render(<PracticeData/>, document.getElementById('root'));

