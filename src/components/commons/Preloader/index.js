import React from 'react';
import Loader from 'react-loader-spinner';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';


function Preloader(props) {
  const { type, styles, height, width, color } = props;
  const className = classNames({
    'main-preloader center justify-center items-center': type === 'page',
    '': type === 'button'
  });

  return (
    <div className={className}>
      <Loader type={styles} height={height} width={width} color={color} className="text-center mx-auto center" />
    </div>
  );
}

Preloader.propTypes = {
  type: PropTypes.string,
  styles: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
};

Preloader.defaultProps = {
  type: null,
  styles: null,
  height: null,
  width: null,
  color: null
};

export default Preloader;
