import React from 'react';

export class AddressForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fname: '',
      lname: '',
      street: '',
      city: '',
      state: '',
      zip: '' 
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value}
    );
  }
  

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  
  }
  
  render(){
    const styles = {
      display: "block",
      fontSize: 18,
      margin: 5
    }
    return (
      <div>
        <form style={{
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 300
          }}
          onSubmit={this.handleSubmit}>Enter Name and Address:
          <label>
            <input
              style={styles}
              type="text"
              placeholder="First name"
              name="firstname"
              onChange={this.handleChange} />
          </label>
          <label>
            <input 
              style={styles}
              type="text"
              placeholder="Last name"
              name="lastname" 
              onChange={this.handleChange} />
          </label>
          <label>
            <input
              style={styles}
              type="text"
              placeholder="Street"
              name="street" 
              onChange={this.handleChange} />
          </label>
          <label>
            <input
              style={styles}
              type="text"
              placeholder="City"
              name="city"
              onChange={this.handleChange} />
          </label>
          <label>
            <input
              style={styles}
              type="text"
              placeholder="State"
              name="state"
              onChange={this.handleChange} />
          </label>
          <label>
            <input
              style={styles}
              type="text"
              placeholder="Zip"
              onChange={this.handleChange} />
          </label>
          <button 
            style={styles}
            type="submit">Submit
          </button>
          
        </form>
      </div>
    )
  }
}
