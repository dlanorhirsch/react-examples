import React from 'react';

export class NameList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: ["Ron", "Bob", "Larry"]
    };
  }
render()
{
  return (
    <div>
      {this.state.list.map(item => (
        <li>{item}</li>
      ))}
     </div>
  )}
}
