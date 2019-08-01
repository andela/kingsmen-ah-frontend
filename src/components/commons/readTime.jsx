import React from "react";
import PropTypes from "prop-types";

export default function ReadTime({ time }) {
  return (
    <p className="text-black text-gray-600 text-sm bold font-sans w-full">
      {time}
    </p>
  );
}

ReadTime.propTypes = {
  time: PropTypes.string.isRequired
};
