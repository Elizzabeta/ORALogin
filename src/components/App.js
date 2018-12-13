import React from 'react';
import {Password, Email} from './Password';

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.changeInputType = this.changeInputType.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange= this.onPasswordChange.bind(this);
  }

    showValidationErr(element, msg) {
      this.setState((prevState) => (
        {errors: 
          [...prevState.errors, {element, msg}] 
        } 
    ));
  }

    clearValidationErr(element) {
      this.setState((prevState) => {
        let newArray = [];
        for(let err of prevState.errors) {
          if(element !== err.element) {
            newArray.push(err);
          }
        }
        //return {errors: newArray};
      });
    }

    onEmailChange(e) {
      this.setState({email: e.target.value});
      this.clearValidationErr("email");
    }

    onPasswordChange(e){
      this.setState({password: e.target.value});
      this.clearValidationErr("password");
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    changeInputType() {
      this.setState({
        type: this.state.type === "password" ? "text" : "password"
      })
    }

    submitForm(e) {
      e.preventDefault();
      console.log(this.state)
        if(this.state.email === "") {
        this.showValidationErr("username", "Email field cannot be empty!");
      } if (this.state.password === "") {
        this.showValidationErr("password", "Password field cannot be empty!");
      }

      // let data = {
      //   email: this.state.email,
      //   password: this.state.password
      // }
      // console.log(data);
     }

  render() {
    let emailErr    = null,
        passwordErr = null;
    for(let err of this.state.errors) {
      if (err.element === "email") {
        emailErr = err.msg
      } if (err.element === "password") {
        passwordErr = err.msg
      }
    }

    return(
      <div className="log-in-box">
      <div className = "top-input-box">
      <img src = {require ("../assets/images/log-in.png")} alt="login" className="log-in-logo" />
      <h2>Log In</h2>

        <form onSubmit={this.submitForm}>
        <div className="input-box">
          < Email
            onChange = {this.onEmailChange}
            handleChange={this.handleChange}
            email={this.state.email} />
            <small className="error-warning">{emailErr ? emailErr : ""}</small>
        </div>

        <div className="input-box">
          < Password
            onChange = {this.onPasswordChange}
            password={this.state.password}
            handleChange={this.handleChange}
            />
            <small className="error-warning">{passwordErr ? passwordErr : ""}</small>
        </div>
        <input onSubmit={this.submitForm} type="submit" value="GO!"/>
        </form>
        </div>
        </div>
    )
  }
}