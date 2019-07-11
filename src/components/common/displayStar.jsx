import React, { div } from "react";
import PropTypes from "prop-types";

export default function DisplayStar({ averageRating }) {
  const starRating = Math.floor(parseInt(averageRating, 10));
  if (starRating === 4) {
    return (
      <div>
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star-o" />
      </div>
    );
  }
  if (starRating === 3) {
    return (
      <div>
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star-o" />
        <i className="fa fa-star-o" />
      </div>
    );
  }
  if (starRating === 2) {
    return (
      <div>
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star-o" />
        <i className="fa fa-star-o" />
        <i className="fa fa-star-o" />
      </div>
    );
  }
  if (starRating === 1) {
    return (
      <div>
        <i className="fa fa-star" />
        <i className="fa fa-star-o" />
        <i className="fa fa-star-o" />
        <i className="fa fa-star-o" />
        <i className="fa fa-star-o" />
      </div>
    );
  }
  if (starRating === 0) {
    return <div />;
  }
  return (
    <div>
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
    </div>
  );
}

DisplayStar.propTypes = {
  averageRating: PropTypes.number.isRequired
};
