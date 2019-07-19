import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faStar } from '@fortawesome/fontawesome-free-regular';

import React from 'react';

export default function FontAwesome({ type, styleClass, onClick, onKeyDown }) {
  return (
    <FontAwesomeIcon
      icon={type}
      className={styleClass}
      onClick={onClick}
      onKeyDown={onKeyDown}
    />
  );
}

FontAwesome.propTypes = {
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  type: PropTypes.shape({}),
  styleClass: PropTypes.string
};

FontAwesome.defaultProps = {
  onClick: () => {},
  onKeyDown: () => {},
  type: faStar,
  styleClass: 'fa fa-edit mr-2 text-gray-700',
};
