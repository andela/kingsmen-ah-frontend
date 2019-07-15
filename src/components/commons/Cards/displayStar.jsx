import React, { Fragment } from "react";
import PropTypes from "prop-types";
import FontAwesome from '../utilities/FontAwesome';

export default function DisplayStar({ averageRating }) {
  const starRating = Math.floor(parseInt(averageRating, 10));
  if (starRating === 4) {
    return (
      <Fragment>
        <FontAwesome />
        <FontAwesome />
        <FontAwesome />
        <FontAwesome />
      </Fragment>
    );
  }
  if (starRating === 3) {
    return (
      <Fragment>
        <FontAwesome />
        <FontAwesome />
        <FontAwesome />
      </Fragment>
    );
  }
  if (starRating === 2) {
    return (
      <Fragment>
        <FontAwesome />
        <FontAwesome />
      </Fragment>
    );
  }
  if (starRating === 1) {
    return (
      <FontAwesome />
    );
  }
  if (starRating === 0) {
    return <div />;
  }
  return (
    <Fragment>
      <FontAwesome />
      <FontAwesome />
      <FontAwesome />
      <FontAwesome />
      <FontAwesome />
    </Fragment>
  );
}

DisplayStar.propTypes = {
  averageRating: PropTypes.number.isRequired
};
