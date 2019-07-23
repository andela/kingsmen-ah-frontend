import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormInput from "@components/commons/FormComponents/RenderInput";
import Button from "@components/commons/utilities/Button";
import { register } from "@actions/auth";
import Preloader from "@components/commons/Preloader";


const emailRegex = RegExp(
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
);

export class Signup extends Component {
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
          input.password !== aValue || aValue.length === 0
            ? "Password does not match"
            : "";
        break;
    }
    this.setState({ input: { ...input, [name]: value }, errors });
  };

  signupBtnClicked = e => {
    e.preventDefault();
    const { input, errors } = this.state;
    const { register } = this.props;
    const { email, password, username } = input;
    const { email: mail, password: userpass, username: uniquename } = errors;

    if (email === "" || password === "" || username === "") return;
    if (mail !== "" || userpass !== "" || uniquename !== "") return;

    register(input);
  };

  showSigninModal = () => {
    const { showSignin } = this.props;
    showSignin();
  };

  registerPage = () => {
    const { input, errors } = this.state;
    const { loading } = this.props;
    const { username, email, password, confirmpass } = input;

    return (
      <form onSubmit={this.signupBtnClicked}>
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
            error={errors.username}
            handleChange={this.handleChange}
          />
          <FormInput
            id="email"
            type="email"
            name="email"
            value={email}
            label="Enter Email"
            className=""
            error={errors.email}
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
            onClick={this.signupBtnClicked}
            color="blue"
            stretch
          >
            {loading === true ? (
              <Preloader
                type="button"
                styles="TailSpin"
                height={15}
                width={15}
                color="white"
              />
          ) : (
            "Register"
          )}
          </Button>
          <div className="text-xs md:text-base my-4">
            <span>Have an account?</span>
            <Button type="regular" onClick={this.showSigninModal} color="blue">
            Sign In
            </Button>
          </div>
          <div className="text-xs md:text-base my-4">
            <span>Can&lsquo;t remember password?</span>
            <Button type="regular" onClick={() => {}} color="blue">
            Reset password
            </Button>
          </div>
        </div>
      </form>
    );
  };

  render() {
    return <div>{this.registerPage()}</div>;
  }
}

Signup.defaultProps = {
  errors: {
    username: "username",
    email: "username@something.com",
    password: "username",
    confirmpass: "username"
  }
};

Signup.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  }).isRequired,
  errors: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirmpass: PropTypes.string
  }),
  register: PropTypes.func.isRequired,
  showSignin: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.auth.error,
  loading: state.auth.loading
});
export default connect(
  mapStateToProps,
  { register }
)(Signup);
