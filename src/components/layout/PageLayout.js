import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '@components/commons/Header';

const user = {
  isAuthenticated: true,
  username: 'Macco'
};

const profile = {
  firstname: 'Emmanuel',
  lastname: 'Okwara',
  avatar: './public/img/logo.png'
};

function PageLayout(props) {
  const { children } = props;
  return (
    <Fragment>
      <Header user={user} profile={profile} />

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