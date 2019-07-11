import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

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
 type: faSearch,
 styleClass: 'fa fa-edit mr-2 text-gray-700'
};
