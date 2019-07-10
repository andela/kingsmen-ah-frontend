import React from "react";
import PropTypes from 'prop-types';

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <p>{label}</p>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

Input.defaultProps = {
    error: '',
  };

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string
  };
  

export default Input;
