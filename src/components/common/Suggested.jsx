import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export function Suggested({
  imageUrl, imageAlt, title, body, name, createdAt
}) {
  return (
    <Fragment>
      <div className="max-w-sm mx-auto mt-16 rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageUrl} alt={imageAlt} />
        <div className="px-6 py-4">
          <div className="text-xl mb-2">
            <p>
              <span className="text-sm flex justify-end">
                <i className="fa fa-star mr-1" aria-hidden="true" alt="edit" />
                <i className="fa fa-star ml-1" aria-hidden="true" alt="delete" />
              </span>
              {title}
            </p>
          </div>
          <p className="text-gray-700 text-base">{body}</p>
        </div>
        <div className="flex items-center mt-1 mb-4 ml-6">
          <img className="w-10 h-10 rounded-full mr-4" src={imageUrl} alt={imageAlt} />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{name}</p>
            <p className="text-gray-600">{createdAt}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Suggested.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  name: PropTypes.string,
  createdAt: PropTypes.string
};

Suggested.defaultProps = {
  imageUrl: 'https://tailwindcss.com/img/card-top.jpg',
  imageAlt: 'Sunset in the mountains',
  title: 'Top On Author\'s Haven',
  body: 'React & Redux and the family of happy people with lorem ipsum. Redux and the family of happy people with lorem ipsum',
  name: 'Jonathan Reinink',
  createdAt: 'Aug 18'
};

export default Suggested;
