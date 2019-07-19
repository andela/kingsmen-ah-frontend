import React from 'react';
import PropTypes from 'prop-types';
import Button from '../utilities/Button';
import Alert from './Alert';

export function CreateCommentCard({
  name, avatar, alt, value, onSubmit, onChange, commentError, submit, reset
}) {
  return (
    <div className="px-auto m-12 p-1 bg-gray-200">
      <div className="w-full">
        <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="flex items-center mb-4">
            <img className="w-10 h-10 rounded-full mr-4" src={avatar} alt={alt} />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{name}</p>
            </div>
          </div>
          {commentError && (<Alert alertBody={commentError} />)}
          <form className="rounded" onSubmit={onSubmit}>
            <div className="mb-2">
              <textarea className="resize appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="comment" rows="6" type="text" placeholder="What's on your mind?" value={value} onChange={onChange} />
            </div>
            <div className="flex justify-end">
              <Button type='outlined' color='blue' onClick={submit}>Comment</Button>
              <Button type='outlined' color='red' onClick={reset}>Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

CreateCommentCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  alt: PropTypes.string,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  commentError: PropTypes.string
};

CreateCommentCard.defaultProps = {
  name: 'Gerrard Ezeugwa',
  avatar: 'https://tailwindcss.com/img/card-left.jpg',
  alt: 'avatar',
  commentError: ''
};

export default CreateCommentCard;
