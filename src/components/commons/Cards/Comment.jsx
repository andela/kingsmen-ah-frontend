import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export function CommentCard({
  name, avatar, alt, body, createdAt
}) {
  return (
    <Fragment>
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
                <i className="fa fa-edit mr-2" aria-hidden="true" alt="edit" />
                <i className="fa fa-trash-o ml-2" aria-hidden="true" alt="delete" />
              </div>
            </div>
            <div className="mb-4 ml-8">
              <p className="text-gray-700 text-base">{body}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export function CreateCommentCard({
  name, avatar, alt
}) {
  return (
    <Fragment>
      <div className="px-auto m-12 p-1 bg-gray-200">
        <div className="w-full">
          <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="flex items-center mb-4">
              <img className="w-10 h-10 rounded-full mr-4" src={avatar} alt={alt} />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{name}</p>
              </div>
            </div>
            <form className="rounded pb-2">
              <div className="mb-2">
                <textarea className="resize appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="6" type="text" placeholder="What's on your mind?" />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 mr-2 border border-blue-500 hover:border-transparent rounded">
                  Comment
                </button>
                <button type="submit" className="ml-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

CommentCard.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  alt: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
};

CommentCard.defaultProps = {
  avatar: 'https://tailwindcss.com/img/card-left.jpg',
  alt: 'avatar'
};

CreateCommentCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  alt: PropTypes.string
};

CreateCommentCard.defaultProps = {
  avatar: 'https://tailwindcss.com/img/card-left.jpg',
  alt: 'avatar'
};

export default CommentCard;
