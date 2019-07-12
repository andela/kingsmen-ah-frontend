import React from 'react';
import PropTypes from 'prop-types';

export default function ProfileResult(props) {
  const { tab } = props;

  switch(tab) {
    case 'profile': 
    return (
      <div>
        PROFILE
      </div>
    )
    case 'article': 
    return (
      <div>
        ARTICLE
      </div>
    )
    case 'bookmarks': 
    return (
      <div>
        BOOKMARKS
      </div>
    )
    default:
      return (
        <div>NOTHING INTERESTING HERE</div>
      )
  }
}

ProfileResult.propTypes = {
  tab: PropTypes.string.isRequired
}
