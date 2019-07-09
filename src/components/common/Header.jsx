import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import logo from '@base/img/logo.png';
import Button from './Button';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      authHidden: true
    };
  }

  authHeaderButtons = avatar => (
    <button
      type="button"
      className="text-blue-600 cursor-pointer"
      onClick={this.showProfileDropDown.bind(this)}
    >
      <img src={avatar} alt="ProfileImage" className="rounded-full w-10 h-10" />
    </button>
  );

  guestHeaderButtons = () => (
    <Fragment>
      <Button text="Sign In" type="regular" color="blue" />
      <Button text="Get Started" type="outlined" color="blue" />
    </Fragment>
  );

  toggleHeader() {
    const { hidden } = this.state;
    this.setState({
      hidden: !hidden
    });
  }

  showProfileDropDown() {
    const { authHidden } = this.state;
    this.setState({
      authHidden: !authHidden
    });
  }

  render() {
    const { hidden, authHidden } = this.state;
    const { user, profile } = this.props;
    const { avatar, firstname, lastname } = profile;
    const { username, isAuthenticated } = user;

    console.log(avatar, firstname, lastname, username, isAuthenticated);

    return (
      <Fragment>
        <div className="bg-white shadow relative">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div className="flex">
                <img
                  src={logo}
                  alt="Author's Haven Icon"
                  className="w-10 h-9 mr-2"
                />
                <h1 className="font-bold text-xl sm-text-base">
                  Author&lsquo;s Haven
                </h1>
              </div>

              <div className="hidden sm:flex sm:items-center">
                {!isAuthenticated
                  ? this.guestHeaderButtons()
                  : this.authHeaderButtons(avatar)}
              </div>

              <div className="sm:hidden cursor-pointer">
                {!isAuthenticated ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 h-6 text-blue-600 cursor-pointer"
                    onClick={this.toggleHeader.bind(this)}
                  >
                    <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z" />
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
              <div className="flex justify-between items-center pt-2">
                {!isAuthenticated ? this.guestHeaderButtons(avatar) : ''}
              </div>
            </div>
          </div>
        </div>

        <div
          className={classname({
            'block bg-white border-t-2 py-2 w-1/3 max-w-xs shadow absolute right-0': true,
            hidden: authHidden
          })}
        >
          <div className="flex justify-between items-center pt-2">
            {isAuthenticated ? <h1>This is more</h1> : ''}
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
