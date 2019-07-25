import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormInput from '@components/commons/FormComponents/RenderInput';
import Button from '@components/commons/utilities/Button';
import { loginUser } from '@actions/auth';
import Preloader from '@components/commons/Preloader';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: { email: '', password: '' }
    };
  }

  handleChange = e => {
    const { input } = this.state;
    const { name, value } = e.target;
    this.setState({ input: { ...input, [name]: value } });
  };

  loginBtnClicked = () => {
    const { input } = this.state;
    const { loginUser: login } = this.props;

    login(input, history);
  };

  showSignupModal = () => {
    const { showSignup } = this.props;
    showSignup();
  };

  loginPage = () => {
    const { input } = this.state;
    const { loading, errors } = this.props;
    const { email, password } = input;
    let valid = false;

    if (email === '' || password === '') {
      valid = false;
    } else {
      valid = true;
    }

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
          onClick={this.loginBtnClicked}
          color='blue'
          stretch
          disabled={loading || !valid}
          title={!valid ? 'Please fill both fields' : null}
        >
          {loading === true ? (
            <Preloader
              type='button'
              styles='TailSpin'
              height={15}
              width={15}
              color='white'
            />
          ) : (
            'Sign In'
          )}
        </Button>
        <div className='text-xs md:text-base my-4'>
          <span>No Account?</span>
          <Button
            type='regular'
            text='Create One'
            onClick={this.showSignupModal}
            color='blue'
          >
            Create One
          </Button>
        </div>
        <div className='text-xs md:text-base my-4'>
          <span>Can&lsquo;t remember password?</span>
          <Button type='regular' onClick={() => {}} color='blue'>
            Reset password
          </Button>
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
  errors: PropTypes.shape({
    global: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  loginUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  showSignup: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.auth.errors,
  loading: state.auth.loading
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
