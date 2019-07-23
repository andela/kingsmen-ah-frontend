import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Gravatar from '@base/img/article.jpg';
import { formatDate } from '@utils/formatDate';

export const calculateRT = (text, wordsPerMinute = 100) => {
  let result = '1 min';

  let textLength = text.split(' ').length;
  if (textLength > wordsPerMinute) {
    let value = Math.ceil(textLength / wordsPerMinute);
    result = `${value} min`;
  }
  return result;
};

const extractArticleDetails = (article, isSmall) => {
  const {
    author: {
      profile: { firstname, lastname },
      username
    },
    title,
    body: fullBody,
    image: fullImage,
    createdAt
  } = article;
  let bodyObject = {};
  try {
    bodyObject = JSON.parse(fullBody);
  } catch (err) {
    bodyObject['blocks'] = [{ data: { text: fullBody }, type: 'paragraph' }];
  }

  let body = '';
  let image = fullImage;
  bodyObject.blocks.map(obj => {
    if (obj.type === 'paragraph') {
      body += obj.data.text;
    } else if (obj.type === 'image') {
      if (!image) image = obj.data.url;
    }
  });

  let maxCharacters = 178;
  if (isSmall) maxCharacters = 80;
  const truncBody =
    body.length >= maxCharacters
      ? `${body.slice(0, maxCharacters).replace(/<[^>]+>/g, '')}...`
      : body.replace(/<[^>]+>/g, '');

  return {
    title,
    body: truncBody,
    fullName: `${firstname || ''} ${lastname || ''}`,
    username,
    time: formatDate(createdAt).short,
    readTime: calculateRT(body, 400),
    image
  };
};

function Article(props) {
  const {
    isSmall,
    article,
    article: { slug },
    stretch
  } = props;

  const {
    title,
    body,
    fullName,
    username,
    time,
    readTime,
    image
  } = extractArticleDetails(article, isSmall);

  return (
    <div
      className={classNames('w-full rounded-lg', {
        'lg:w-1/3 md:w-1/2': isSmall,
        'w-full max-w-5xl': !isSmall,
        'lg:w-full md:w-full': stretch,
        'mt-4': !stretch && isSmall
      })}
    >
      <div
        className={classNames('flex', {
          'flex-col': !isSmall,
          'lg:flex-row md:flex-row': isSmall,
          'relative overflow-hidden': true
        })}
      >
        <Link to={`/article/${slug}`}>
          <img
            src={image || Gravatar}
            width={isSmall ? '200px' : '100%'}
            height='100%'
            alt='Article'
            className={classNames({
              'article-img left:0 md:right-0 md:right-auto object-cover': true,
              absolute: isSmall,
              'w-24 h-full pb-2': isSmall ? true : false
            })}
          />
        </Link>

        <div
          className={classNames('text-sm', {
            'mt-2': !isSmall,
            'content-center': true,
            'pl-32 md:pl-24 md:mx-4': isSmall
          })}
        >
          <Link to={`/article/${slug}`}>
            <h2 className='font-semibold text-lg hover:text-blue-700 overflow-hidden h-6 mb-1'>
              {title}
            </h2>
          </Link>
          <p className='text-gray-600 h-10 overflow-hidden'>{body}</p>
          <Link
            to={`/profile/${username}`}
            className='mr-3 hover:text-blue-700'
          >
            {fullName === ' ' ? username : fullName}
          </Link>
          <div className='flex font-thin text-gray-600 text-xs'>
            <p>{time}</p>
            <span className='mx-2 mb-3 text-black font-bold'>.</span>
            <p>{`${readTime} read`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Article.propTypes = {
  isSmall: PropTypes.bool.isRequired,
  article: PropTypes.shape({
    author: PropTypes.shape({
      username: PropTypes.string.isRequired
    }).isRequired,
    slug: PropTypes.string.isRequired
  }).isRequired,
  stretch: PropTypes.bool
};

Article.defaultProps = {
  stretch: false
};

export default Article;
