import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Preloader from '../commons/Preloader';

/**
 * @function Authenticator
 * @param {object} props
 * @return {JSX} - MyComponent|Preloader|Redirect
 */
const Authenticator = (props) => {
  const {
      MyComponent,
      loading,
      isAuthenticated,
      location
  } = props;

  return (
    <Fragment>
      {loading && (
        <div className="flex w-full h-screen items-center justify-center bg-gray-300">
          <Preloader
            type="page"
            styles="TailSpin"
            height={50}
            width={50}
            color="blue"
          />
        </div>
      )
    }
      {!loading && isAuthenticated && <MyComponent {...props} />}
      {!loading && !isAuthenticated && (
        <Redirect
          to={{ pathname: '/', state: { from: location } }}
        />
      )}
    </Fragment>
  );
};

Authenticator.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired,
  loading: PropTypes.bool,
  MyComponent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object
  ]).isRequired
};

Authenticator.defaultProps = {
  loading: false
}

export default Authenticator;