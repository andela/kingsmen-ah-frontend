import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      children, title, toggle
    } = this.props;
    return (
      <div className={classNames('modal flex', { 'is-visible': toggle })}>
        <div className="modal-container text-center relative justify-center items-center">
          <div className="absolute modal-exit bg-white rounded-full py-1 px-3 shadow-lg cursor-pointer flex">
            <span className="">X</span>
          </div>
          <div className="modal_title">
            <h2 className="text-normal font-bold text-xl">{title}</h2>
          </div>
          <div className="modal_body">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  toggle: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

Modal.defaultProp = {
  toggle: false,
  children: ''
};


export default Modal;
