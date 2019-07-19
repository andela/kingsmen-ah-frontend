import React from 'react';
import PropTypes from 'prop-types';
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular';
import FontAwesome from '../utilities/FontAwesome';

export function CommentCard({
  name, avatar, alt, body, createdAt, del
}) {
  return (
    <div className="px-auto m-12 p-1 bg-gray-200">
      <div className="w-full">
        <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="flex mb-4">
            <img className="w-10 h-10 rounded-full mr-4" src={avatar} alt={alt} />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{name}</p>
              <p className="text-gray-600 mt-1">{createdAt}</p>
            </div>
            <div className="text-bg ml-auto" />
          </div>
          <div className="mb-4 ml-8">
            <p className="text-gray-700 text-base">{body}</p>
          </div>
          <div className="text-bg ml-auto">
            <FontAwesome type={faTrashAlt} onClick={del} />
          </div>
        </div>
      </div>
    </div>
  );
}

CommentCard.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  // like: PropTypes.func.isRequired,
  // unlike: PropTypes.func.isRequired,
  // likeCount: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  alt: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  del: PropTypes.func
};

CommentCard.defaultProps = {
  avatar: 'https://tailwindcss.com/img/card-left.jpg',
  alt: 'avatar',
  del: () => { }
};

export default CommentCard;
