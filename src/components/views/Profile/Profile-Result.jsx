import React from 'react';
import PropTypes from 'prop-types';

export default function ProfileResult(props) {
  const { tab } = props;
  const displayTab = (tabname) => {
    return(
      <div className="center-item flex justify-center items-center nav-result">
        {tabname}
      </div>

    )
  }

  switch(tab) {
    case 'Profile': 
    return displayTab('profile');
    case 'Articles': 
    return displayTab('articles');
    case 'Bookmarks': 
    return displayTab('bookmarks');
    default:
      return displayTab('articles')
  }
}

ProfileResult.propTypes = {
  tab: PropTypes.string.isRequired
}
