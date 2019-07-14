import React from "react";
import PropTypes from 'prop-types';

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div>
      <p>{label}</p>
      <input {...rest} name={name} id={name} />
      {error && <div>{error}</div>}
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
