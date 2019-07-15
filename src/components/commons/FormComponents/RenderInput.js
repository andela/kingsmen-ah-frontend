/* eslint-disable jsx-a11y/label-has-for */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

class RenderInput extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    error: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: '',
    error: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      changed: false
    };
  }

  onFocus = () => {
    this.setState({
      changed: true
    });
  }

  onFocusOut = () => {
    const { value } = this.props;
    if (value === '') {
      this.setState({
        changed: false
      });
    }
  }

  render() {
    const {
      id, type, name, className,
      value, error, label, handleChange
    } = this.props;
    const { changed } = this.state;

    return (
      <Fragment>
        <div className="my-4 relative mb-8">
          <label htmlFor={id} className={classNames({ 'has-value': changed })}>{label}</label>

          <input
            id={id}
            type={type}
            name={name}
            className={`${className} w-full py-2 border-gray-600 border-b-2 outline-none`}
            value={value}
            onChange={handleChange}
            onFocus={this.onFocus}
            onBlur={this.onFocusOut}
            error={error}
          />
          {error && <div className="text-red-600 text-xs text-left mt-1">{error}</div>}
        </div>
      </Fragment>
    );
  }
}

export default RenderInput;
