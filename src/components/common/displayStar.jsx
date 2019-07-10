import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function DisplayStar({ averageRating }) {
  const starRating = Math.floor(parseInt(averageRating, 10));
  if (starRating === 4) {
    return (
      <Fragment>
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star-o" />
      </Fragment>
    );
  }
  if (starRating === 3) {
    return (
      <Fragment>
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star-o" />
        <i className="fa fa-star-o" />
      </Fragment>
    );
  }
  if (starRating === 2) {
    return (
      <Fragment>
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star-o" />
        <i className="fa fa-star-o" />
        <i className="fa fa-star-o" />
      </Fragment>
    );
  }
  if (starRating === 1) {
    return (
      <Fragment>
        <i className="fa fa-star" />
        <i className="fa fa-star-o" />
        <i className="fa fa-star-o" />
        <i className="fa fa-star-o" />
        <i className="fa fa-star-o" />
      </Fragment>
    );
  }
  if (starRating === 0) {
    return <Fragment />;
  }
  return (
    <Fragment>
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
    </Fragment>
  );
}

DisplayStar.propTypes = {
  averageRating: PropTypes.number.isRequired
};
