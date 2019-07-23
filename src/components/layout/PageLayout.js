import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '@components/commons/Header';


function PageLayout(props) {
  const { children } = props;
  return (
    <Fragment>
      <Header />

      {children}
    </Fragment>
  );
}

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired
}

export default PageLayout;