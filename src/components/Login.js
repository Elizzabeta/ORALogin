import React from 'react';

export class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    };
    this.sendData = this.sendData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(e) {
    let fields = this.state.fields
    fields[e.target.name] = e.target.value;
    this.setState({
      fields: fields
    });
  }

  validateData(){
    let fields = this.state.fields;
    let errors = {};
    let dataIsValid = true;

    if(!fields["email"]) {
      dataIsValid = false;
      errors["email"] = "Please enter your e-mail";
    }

    if(typeof fields["email"] !== "undefined"){
      let pattern = /\S+@\S+\.\S+/
      if(!pattern.test(fields["email"])) {
        dataIsValid = false;
        errors["email"] = "Please enter valid e-mail";
      }
    }

    if(!fields["password"]) {
      dataIsValid = false;
      errors["password"] = "Please enter your password";
    }

    if(typeof fields["password"] !== "undefined"){
      let pattern = /(?=.{8,})/
      if(!pattern.test(fields["password"])) {
      dataIsValid = false;
      errors["password"] = "Please enter valid password"
      }
    }
    this.setState({
      errors: errors
    });
    return dataIsValid  
  }


  sendData(e) {
  e.preventDefault(); 
   if(this.validateData()) {
     let fields = {};
     fields["email"] = "";
     fields["password"] = "";
     this.setState({
       fields:fields
     });
   }
}

  render() {
    return(
      <div className="log-in-box">
        <div className = "top-input-box">
          <img src = {require ("../assets/images/log-in.png")} 
               alt="login" className="log-in-logo" />
            <h2>Log In</h2>

        <form onSubmit={this.sendData}>
        <div className="input-box">
        <input value = {this.state.fields.email} 
               onChange = {this.handleChange} 
               placeholder="E-Mail" 
               name = "email" type = "text" />
          <div className="error-warning">{this.state.errors.email}</div>
        </div>

        <div className="input-box">
          <input value={this.state.fields.password} 
                 onChange = {this.handleChange} 
                 placeholder = "Password" 
                 name="password" type="text"/>
          <div className="error-warning">{this.state.errors.password}</div>
        </div>
        <input type="submit" value="GO!"/>
        </form>
        </div>
      </div>
    )
  }
}