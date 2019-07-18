import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormInput from "@components/commons/FormComponents/RenderInput";
import Button from "@components/commons/utilities/Button";
import register from "@actions/users";

const emailRegex = RegExp(
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
);

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: { username: "", email: "", password: "", confirmpass: "" },
      errors: {}
    };
  }

  handleChange = e => {
    const { input, errors } = this.state;
    const { name, value } = e.target;
    const aValue = value.trim();

    switch (name) {
      case "username":
        errors.username =
          (aValue.length < 3 && aValue.length > 0) || aValue.length === 0
            ? "minimum 3 characters required"
            : "";
        break;
      case "email":
        errors.email =
          emailRegex.test(aValue) && aValue.length > 0
            ? ""
            : "Invalid email address";
        break;
      case "password":
        errors.password =
          (aValue.length < 6 && aValue.length > 0) || aValue.length === 0
            ? "minimum 6 characters required"
            : "";
        break;
      case "confirmpass":
        errors.confirmpass =
          input.password !== input.confirmpass || aValue.length === 0
            ? "Password does not match"
            : "";
        break;
    }
    this.setState({ input: { ...input, [name]: value }, errors });
  };

  loginBtnClicked = () => {
    const { input, errors } = this.state;
    const { register } = this.props;
    const { email, password, username } = input;
    const { email: mail, password: userpass, username: uniquename } = errors;

    if (email === "" || password === "" || username === "") return;
    if (mail !== "" || userpass !== "" || uniquename !== "") return;

    register(input);
  };

  registerPage = () => {
    const { input, errors } = this.state;
    const { username, email, password, confirmpass } = input;
    const { errors: errorObject } = this.props;

    const { email: mail, username: uniquename } = errorObject;

    const unique = uniquename || '';
    const mailErr = mail || '';

    return (
      <div className="w-full md:w-2/3 lg:w-2/3 m-auto md:my-4 lg:my-6">
        <span className="text-xs md:text-base lg:text-lg text-gray-700">
          Enter your username, email address and password to create your
          account.
        </span>
        <FormInput
          id="username"
          type="text"
          name="username"
          value={username}
          label="Enter Username"
          className=""
          error={errors.username || unique}
          handleChange={this.handleChange}
        />
        <FormInput
          id="email"
          type="email"
          name="email"
          value={email}
          label="Enter Email"
          className=""
          error={errors.email || mailErr}
          handleChange={this.handleChange}
        />
        <FormInput
          id="password"
          type="password"
          name="password"
          value={password}
          label="Enter Password"
          className=""
          error={errors.password}
          handleChange={this.handleChange}
        />
        <FormInput
          id="confirmpass"
          type="password"
          name="confirmpass"
          value={confirmpass}
          label="Confirm Password"
          className=""
          error={errors.confirmpass}
          handleChange={this.handleChange}
        />
        <Button
          type="solid"
          text="Sign Up"
          onClick={this.loginBtnClicked}
          color="blue"
          stretch
        />
        <div className="text-xs md:text-base my-4">
          <span>Have an account?</span>
          <Button
            type="regular"
            text="Sign in"
            onClick={() => {}}
            color="blue"
          />
        </div>
        <div className="text-xs md:text-base my-4">
          <span>Can&lsquo;t remember password?</span>
          <Button
            type="regular"
            text="Reset password"
            onClick={() => {}}
            color="blue"
          />
        </div>
        <span className="text-xs md:text-base lg:text-base text-gray-700">
          To make Author’s Haven work, we log user data and share it with
          service providers. Click “Register” above to accept Author’s Haven We
          hope you have a pleasant read/write
        </span>
      </div>
    );
  };

  render() {
    return <div>{this.registerPage()}</div>;
  }
}

Signup.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  }).isRequired,
  errors: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirmpass: PropTypes.string
  }).isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.auth.error.errors
});
export default connect(
  mapStateToProps,
  { register }
)(Signup);
