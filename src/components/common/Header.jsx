import React, { Component } from 'react';
import classname from 'classnames';
import logo from '@base/img/logo.png';
import Button from './Button';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  toggleHeader() {
    const { hidden } = this.state;
    this.setState({
      hidden: !hidden
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <div className="bg-white shadow">
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
              <Button text="Sign In" type="regular" color="blue" />
              <Button text="Get Started" type="outlined" color="blue" />
            </div>

            <div className="sm:hidden cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6 text-blue-600 cursor-pointer"
                onClick={this.toggleHeader.bind(this)}
              >
                <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z" />
              </svg>
            </div>
          </div>

          <div
            className={classname({
              'block sm:hidden bg-white border-t-2 py-2': true,
              hidden
            })}
          >
            <div className="flex justify-between items-center pt-2">
              <Button text="Sign In" type="regular" color="blue" />
              <Button text="Get Started" type="outlined" color="blue" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
