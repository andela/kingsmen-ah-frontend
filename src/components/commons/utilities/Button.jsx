import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../index.scss';

function Button({ type, color, stretch, children, onClick }) {
  return (
    <button
      type='button'
      className={classnames(
        'bg-transparent hover:text-white py-2 px-4 border  rounded mr-2 text-sm',
        {
          [`hover:bg-${color}-700 text-${color}-700 border-${color}-700 hover:border-transparent ${
            stretch ? 'block w-full' : ''
          }`]: type === 'outlined'
        },
        {
          [`text-white bg-${color}-700 hover:bg-${color}-800 ${
            stretch ? 'block w-full' : ''
          }`]: type === 'solid'
        },
        {
          [`text-${color}-700 hover:text-${color}-800 border-transparent`]:
            type === 'regular'
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  color: PropTypes.string.isRequired,
  stretch: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  stretch: false,
  onClick: () => {}
};

export default Button;
