import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';


function Portal(props) {
  const { children } = props;
  return (
    <Fragment>
      {createPortal(children, document.getElementById('app'))}
    </Fragment>
  );
}

Portal.propTypes = {
  children: PropTypes.element.isRequired
};

export default Portal;
