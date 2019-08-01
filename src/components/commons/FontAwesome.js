import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faStar } from '@fortawesome/fontawesome-free-solid';

import React from 'react'

export default function FontAwesome({ type, styleClass }) {
  return (
    <FontAwesomeIcon icon={type} className={styleClass} />
  )
}

FontAwesome.propTypes = {
  type: PropTypes.string,
  styleClass: PropTypes.string
};

FontAwesome.defaultProps = {
  type: faStar,
  styleClass: 'fa fa-edit mr-2 text-gray-700'
};
