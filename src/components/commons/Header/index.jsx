import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classname from 'classnames';
import logo from '@base/img/logo.png';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import Modal from '@components/commons/Modal';
import LoginPage from '@components/views/Login';
import { getProfile, logoutUser } from '@actions/auth';
import Button from '../utilities/Button';
import FontAwesome from '../utilities/FontAwesome';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      authHidden: true,
      showSearchBar: false,
      showSignInModal: false,
      showSignUpModal: false
    };

    this.defaultAvatar =
      'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png';
  }

  componentWillMount() {
    const { getProfile, user } = this.props;
    const { username } = user;
    if (username) {
      getProfile(username);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { errors, isAuthenticated } = nextProps;
    if (!errors.global && isAuthenticated) {
      this.setState({ showSignInModal: false });
    }
  }

  exitModal = () => {
    this.setState({ showSignUpModal: false, showSignInModal: false });
  };

  logoutBtnClicked = () => {
    this.setState({ authHidden: true });

    const { logoutUser, history } = this.props;
    logoutUser(history);
  };

  toggleSignInDialog = () => {
    const { showSignInModal } = this.state;
    this.setState({
      showSignInModal: !showSignInModal,
      showSignUpModal: false
    });
  };

  showSignupDialog = () => {
    this.setState({ showSignUpModal: true, showSignInModal: false });
  };

  authHeaderButtons = avatar => {
    return (
      <Fragment>
        <div className='flex items-center'>
          <FontAwesome
            type={faSearch}
            styleClass='m-2 text-gray-500 mr-4 cursor-pointer text-2xl'
            role='presentation'
            onKeyDown={this.showSearchBar}
            onClick={this.showSearchBar}
          />
        </div>

        <img
          src={avatar || this.defaultAvatar}
          alt='ProfileImage'
          className='rounded-full w-10 h-10 text-blue-600 cursor-pointer block'
          role='presentation'
          onKeyDown={this.showProfileDropDown}
          onClick={this.showProfileDropDown}
        />
      </Fragment>
    );
  };

  guestHeaderButtons = () => (
    <Fragment>
      <Button type='regular' color='blue' onClick={this.toggleSignInDialog}>
        Sign In
      </Button>
      <Button type='outlined' color='blue' onClick={() => {}}>
        Get Started
      </Button>
    </Fragment>
  );

  showSearchBar = () => {
    const { showSearchBar } = this.state;

    this.setState({
      showSearchBar: !showSearchBar,
      authHidden: showSearchBar ? true : false
    });
  };

  toggleHeader = () => {
    const { hidden } = this.state;
    this.setState({
      hidden: !hidden
    });
  };

  showProfileDropDown = () => {
    const { authHidden, showSearchBar } = this.state;
    this.setState({
      authHidden: showSearchBar ? false : !authHidden,
      showSearchBar: false
    });
  };

  render() {
    const {
      hidden,
      authHidden,
      showSearchBar,
      showSignInModal,
      showSignUpModal
    } = this.state;
    const { user, isAuthenticated, profile } = this.props;
    const { avatar, firstname, lastname } = profile;
    const { username } = user;

    return (
      <Fragment>
        <div className='bg-white shadow relative'>
          <div className='container mx-auto px-4'>
            <div className='flex items-center justify-between py-4'>
              <div className='flex'>
                <Link to='/'>
                  <img
                    src={logo}
                    alt="Authors' Haven Icon"
                    className='w-10 h-9 mr-2'
                  />
                </Link>
                <h1 className='font-bold text-xl sm-text-base'>
                  Author&lsquo;s Haven
                </h1>
              </div>

              <div className='hidden sm:flex sm:items-center'>
                {!isAuthenticated
                  ? this.guestHeaderButtons()
                  : this.authHeaderButtons(avatar)}
              </div>

              <div className='flex sm:hidden cursor-pointer'>
                {!isAuthenticated ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    className='w-6 h-6 text-blue-600 cursor-pointer'
                    onClick={this.toggleHeader}
                  >
                    <path d='M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z' />
                  </svg>
                ) : (
                  this.authHeaderButtons(avatar)
                )}
              </div>
            </div>

            <div
              className={classname({
                'block sm:hidden bg-white border-t-2 py-2': true,
                hidden
              })}
            >
              <div className='flex justify-between items-center pt-2'>
                {!isAuthenticated ? this.guestHeaderButtons(avatar) : ''}
              </div>
            </div>
          </div>
        </div>

        <div
          className={classname({
            'block bg-white border-t-2 py-2 shadow-lg absolute right-0 w-full md:w-2/5 lg:w-2/5': true,
            hidden: authHidden,
            'lg:max-w-xs': !showSearchBar
          })}
        >
          <div className='tooltip container' />
          <div className='flex justify-between items-center pt-2 font-sans text-sm'>
            {isAuthenticated && !showSearchBar ? (
              <div className='p-2 px-2 sm:px-6  w-full'>
                <Link to={`/profile/${username}`}>
                  <div className='border-b pb-4 md:flex lg:flex flex-wrap'>
                    <img
                      src={avatar || this.defaultAvatar}
                      alt='My profile'
                      className='rounded-full w-10 h-10 mx-auto md:mx-0 lg:mx-0'
                    />
                    <div className='ml-0 md:ml-4 lg:ml-4 md:text-left lg:text-left text-center hover:text-blue-700'>
                      <div className='font-bold text-base'>
                        {`${firstname || ''} ${lastname || ''}`}
                      </div>
                      <div className='text-gray-500'>{`@ ${username}`}</div>
                    </div>
                  </div>
                </Link>

                <Link
                  to={`/profile/${username}`}
                  className='block border-b pb-2 hover:text-blue-700 pt-2'
                >
                  Profile
                </Link>
                <Link
                  to='/articles'
                  className='block border-b pb-2 pt-2 hover:text-blue-700'
                >
                  New Article
                </Link>
                <Button
                  type='regular'
                  color='red'
                  onClick={this.logoutBtnClicked}
                  className='w-full text-left py-2 text-red-700 hover:text-red-800 rounded mr-2'
                  stretch
                >
                  Sign out
                </Button>
              </div>
            ) : (
              ''
            )}

            {isAuthenticated && showSearchBar ? (
              <input
                type='text'
                className='mr-4 resize-x w-full ml-4 mb-2 input'
                placeholder='Search...'
                autoFocus
              />
            ) : (
              ''
            )}
          </div>
        </div>

        {showSignInModal ? (
          <Modal title='Welcome Back' exitModal={this.exitModal} toggle>
            {<LoginPage showSignup={this.showSignupDialog} />}
          </Modal>
        ) : (
          ''
        )}

        {showSignUpModal ? (
          <Modal title='Join Us' exitModal={this.exitModal} toggle>
            <h1>Register with Author&lquos;s Haven</h1>
          </Modal>
        ) : (
          ''
        )}
      </Fragment>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  }).isRequired,
  profile: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    global: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  history: PropTypes.shape({}).isRequired,
  getProfile: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.auth.profile,
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors
});

export default connect(
  mapStateToProps,
  { getProfile, logoutUser }
)(withRouter(Header));
