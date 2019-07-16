import React from 'react';
import PropTypes from 'prop-types';

import './Common.scss';

function Tags(props) {
  const { tags } = props;
  return (
    <div className="flex flex-wrap font-sans">
      {tags.map((tag, index) => {
      return <p key={index.toString()} className="py-1 px-2 bg-gray text-black text-sm font-thin rounded border mr-2 mb-2">{tag}</p>
     })}
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Tags;
