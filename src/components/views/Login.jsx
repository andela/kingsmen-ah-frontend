import React, { Component } from 'react';
import Joi from 'joi-browser';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import FormInput from '@components/commons/FormComponents/RenderInput';
import Button from '@components/commons/utilities/Button';
import { loginUser } from '@actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: { email: '', password: '' },
      errors: {}
    };

    this.schema = {
      email: Joi.string()
        .required()
        .email()
        .label('Email'),
      password: Joi.string()
        .required()
        .min(5)
        .label('Password')
    };
  }

  componentWillReceiveProps(nextProps) {
    const { errors } = nextProps;
    if (errors.global) {
      toast.error(errors.global);
    }
  }

  handleChange = e => {
    const { input, errors } = this.state;
    const { name, value } = e.target;

    const error = this.validateProperty({ name, value });
    if (error) errors[name] = error;
    else errors[name] = '';

    this.setState({ input: { ...input, [name]: value }, errors });
  };

  loginBtnClicked = () => {
    const { input } = this.state;
    const { loginUser: login } = this.props;

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    login(input, history);
  };

  validate = () => {
    const { input: data } = this.state;
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  loginPage = () => {
    const { input, errors } = this.state;
    const { email, password } = input;

    return (
      <div className='w-full md:w-2/3 lg:w-2/3 m-auto md:my-4 lg:my-6'>
        <span className='text-xs md:text-base lg:text-lg text-gray-700'>
          Enter the email address and password associated with your account.
        </span>
        <FormInput
          id='email'
          type='email'
          name='email'
          value={email}
          label='Enter Email'
          className=''
          error={errors.email}
          handleChange={this.handleChange}
        />
        <FormInput
          id='password'
          type='password'
          name='password'
          value={password}
          label='Enter Password'
          className=''
          error={errors.password}
          handleChange={this.handleChange}
        />
        <Button
          type='solid'
          text='Sign In'
          onClick={this.loginBtnClicked}
          color='blue'
          stretch
        />
        <div className='text-xs md:text-base my-4'>
          <span>No Account?</span>
          <Button
            type='regular'
            text='Create One'
            onClick={() => {}}
            color='blue'
          />
        </div>
        <div className='text-xs md:text-base my-4'>
          <span>Can&lsquo;t remember password?</span>
          <Button
            type='regular'
            text='Reset password'
            onClick={() => {}}
            color='blue'
          />
        </div>
        <span className='text-xs md:text-base lg:text-base text-gray-700'>
          To make Author’s Haven work, we log user data and share it with
          service providers. Click “Sign in” above to accept Author’s Haven We
          hope you have a pleasant read/write
        </span>
      </div>
    );
  };

  render() {
    return <div>{this.loginPage()}</div>;
  }
}

Login.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  }).isRequired,
  errors: PropTypes.shape({
    global: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  errors: state.auth.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
