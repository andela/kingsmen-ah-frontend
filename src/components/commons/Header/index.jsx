import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classname from 'classnames';
import logo from '@base/img/logo.png';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import Button from '../utilities/Button';
import FontAwesome from '../utilities/FontAwesome';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      authHidden: true,
      showSearchBar: false
    };
  }

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
          src={avatar}
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
      <Button text='Sign In' type='regular' color='blue' onClick={() => {}} />
      <Button
        text='Get Started'
        type='outlined'
        color='blue'
        onClick={() => {}}
      />
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
    const { hidden, authHidden, showSearchBar } = this.state;
    const { user, profile } = this.props;
    const { avatar, firstname, lastname } = profile;
    const { username, isAuthenticated } = user;

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
            'block bg-white border-t-2 py-2 w-2/5 max-w-xs shadow-lg absolute right-0': true,
            hidden: authHidden
          })}
        >
          <div className='tooltip container' />
          <div className='flex justify-between items-center pt-2 font-sans text-sm'>
            {isAuthenticated && !showSearchBar ? (
              <div className='p-2 px-2 sm:px-6  w-full'>
                <Link to={`/profile/${username}`}>
                  <div className='border-b pb-4 md:flex lg:flex flex-wrap'>
                    <img
                      src={avatar}
                      alt='My profile'
                      className='rounded-full w-10 h-10 mx-auto md:mx-0 lg:mx-0'
                    />
                    <div className='ml-0 md:ml-4 lg:ml-4 md:text-left lg:text-left text-center hover:text-blue-700'>
                      <div className='font-bold text-base'>{`${firstname} ${lastname}`}</div>
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
                <Link to='/' className='block pt-2 hover:text-blue-700'>
                  Sign out
                </Link>
              </div>
            ) : (
              ''
            )}

            {isAuthenticated && showSearchBar ? (
              <input
                type='text'
                className='mr-4 resize-x w-full ml-4 mb-2'
                placeholder='Search...'
                autoFocus
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    username: PropTypes.string
  }).isRequired,
  profile: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired
};
