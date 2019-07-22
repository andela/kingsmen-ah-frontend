import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Portal from '@components/commons/utilities/Portal';
import './index.scss';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { children, title, toggle, exitModal } = this.props;
    return (
      <Portal>
        <div className={classNames('modal flex', { 'is-visible': toggle })}>
          <div className='modal-container text-center relative justify-center items-center'>
            <div
              role='presentation'
              className='absolute modal-exit bg-white rounded-full py-1 px-3 shadow-lg cursor-pointer flex hover:bg-gray-300'
              onClick={exitModal}
            >
              <span className='icon ion-md-cancel'>x</span>
            </div>
            <div className='modal_title'>
              <h2 className='text-normal font-bold text-base sm:text-2xl md:text-4xl'>
                {title}
              </h2>
            </div>
            <div className='modal_body'>{children}</div>
          </div>
        </div>
      </Portal>
    );
  }
}

Modal.propTypes = {
  toggle: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  exitModal: PropTypes.func.isRequired
};

Modal.defaultProp = {
  toggle: false,
  children: ''
};

export default Modal;
