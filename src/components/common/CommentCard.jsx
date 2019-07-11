import React from 'react';
import PropTypes from 'prop-types';
import { faEdit, faTrash } from '@fortawesome/fontawesome-free-solid';
import FontAwesome from './FontAwesome';

export function CommentCard({
  name, avatar, alt, body, createdAt
}) {
  return (
    <div className="px-auto m-12 p-1 bg-gray-200">
      <div className="w-full">
        <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="flex mb-4">
            <img className="w-10 h-10 rounded-full mr-4" src={avatar} alt={alt} />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{name}</p>
              <p className="text-gray-600">{createdAt}</p>
            </div>
            <div className="text-bg flex ml-auto">
              <FontAwesome type={faEdit} />
              <FontAwesome type={faTrash} />
            </div>
          </div>
          <div className="mb-4 ml-8">
            <p className="text-gray-700 text-base">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CommentCard.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string,
  avatar: PropTypes.string,
  alt: PropTypes.string,
  createdAt: PropTypes.string,
};

CommentCard.defaultProps = {
  name: 'Gerrard Ezeugwa',
  body: 'Lorem is ipsum, ipsum I say. Lorem is ipsum, ipsum I say. Lorem is ipsum, ipsum I say.',
  avatar: 'https://tailwindcss.com/img/card-left.jpg',
  alt: 'avatar',
  createdAt: '1st Jan 2019'
};

export default CommentCard;
