import React, { Component } from 'react';
import Joi from 'joi-browser';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormInput from '@components/commons/FormComponents/RenderInput';
import Button from '@components/commons/utilities/Button';
import register from '@actions/users';

class Signup extends Component {
 constructor(props) {
  super(props);
  this.state = {
   input: { username: '', email: '', password: '' },
   errors: {}
  };
  this.schema = {
   username: Joi.string()
    .required()
    .min(4)
    .label('Username'),
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
  const logger = console;
  logger.log(nextProps);
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
  const { register } = this.props;

  const errors = this.validate();
  this.setState({ errors: errors || {} });
  if (errors) return;

  register(input);
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

 registerPage = () => {
  const { input, errors } = this.state;
  const { username, email, password } = input;

  return (
    <div className='w-full md:w-2/3 lg:w-2/3 m-auto md:my-4 lg:my-6'>
      <span className='text-xs md:text-base lg:text-lg text-gray-700'>
     Enter your username, email address and password to create your account.
      </span>
      <FormInput
        id='username'
        type='text'
        name='username'
        value={username}
        label='Enter Username'
        className=''
        error={errors.username}
        handleChange={this.handleChange}
      />
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
        text='Sign Up'
        onClick={this.loginBtnClicked}
        color='blue'
        stretch
      />
      <div className='text-xs md:text-base my-4'>
        <span>Have an account?</span>
        <Button
          type='regular'
          text='Sign in'
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
  password: PropTypes.string
 }).isRequired,
 register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
 user: state.auth.user,
 errors: state.auth.errors
});
export default connect(
 mapStateToProps,
 { register }
)(Signup);
