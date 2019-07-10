import React from "react";
import Joi from "joi-browser";
import Form from "@components/common/form";

const logger = console;
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", email: ""},
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    username: Joi.string()
      .required()
      .label("Username")
  };

  doSubmit = async () => {
    try {
      logger.log(this.state.data);
    
    //   window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const {errors: validationErrors} = this.state.errors
        const errors = { ...validationErrors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
