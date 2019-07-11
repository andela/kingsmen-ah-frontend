import React from 'react';
import PropTypes from 'prop-types';

export function Search({
  title, body, name, searchClass, createdAt
}) {
  return (
    <div className="max-w-lg mx-auto mt-16 mb-16 rounded overflow-hidden border border-4 border-gray-600">
      <div className={searchClass}>
        <p className="text-xl font-bold mb-2">
          {title}
        </p>
        <p className="text-gray-700 text-base mb-2">{body}</p>
        <p className="text-gray-600 text-xs">
          {name}
          {' '}
          {createdAt}
        </p>
      </div>

      <div className={searchClass}>
        <p className="text-xl font-bold mb-2">
          {title}
        </p>
        <p className="text-gray-700 text-base mb-2">{body}</p>
        <p className="text-gray-600 text-xs">
          {name}
          {' '}
          {createdAt}
        </p>
      </div>

      <div className={searchClass}>
        <p className="text-xl font-bold mb-2">
          {title}
        </p>
        <p className="text-gray-700 text-base mb-2">{body}</p>
        <p className="text-gray-600 text-xs">
          {name}
          {' '}
          {createdAt}
        </p>
      </div>
    </div>
  );
}

Search.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string,
  title: PropTypes.string,
  searchClass: PropTypes.string,
  createdAt: PropTypes.string
};

Search.defaultProps = {
  title: 'Top On Author\'s Haven',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque.',
  searchClass: 'px-6 py-4 border hover:bg-gray-300',
  name: 'Jonathan Reinink',
  createdAt: 'Aug 18 2018'
};

export default Search;
