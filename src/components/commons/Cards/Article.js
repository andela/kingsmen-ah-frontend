import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function Article(props) {
  const { isSmall, article } = props;
  const { author } = article;
  return (
    <div className={classNames('w-full rounded-lg mb-6', { 'lg:w-1/3 md:w-1/2': isSmall, 'lg:w-2/3 md:w-2/3': !isSmall })}>
      <div className={classNames('flex', { 'flex-col': !isSmall, 'flex-row-reverse justify-between lg:flex-row md:flex-row': isSmall })}>
        <Link to={`/article/${article.slug}`}>
          <img src="https://miro.medium.com/max/1400/1*s692eS0M3mX14zMU4HJVkw.jpeg" width={isSmall ? '200px' : '100%'} height="200px" alt="Article" className="article-img" />
        </Link>

        <div className={classNames('text-sm', { '': isSmall, 'mt-2': !isSmall })}>
          <Link to={`/article/${article.slug}`}>
            <h2 className="font-semibold text-lg">Hello World</h2>
          </Link>
          <p className="text-gray-600">lorem lorem lore lorem lorem...</p>
          <Link to={`/profile/${author.username}`} className="mr-3">
            {author.username}
          </Link>
          <div className="flex font-thin text-gray-600 text-xs">
            <p>Jan. 18</p>
            <span className="mx-2 mb-3 text-black font-bold">.</span>
            <p>2 mins read</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Article.propTypes = {
  isSmall: PropTypes.bool.isRequired,
  article: PropTypes.shape({
    author: PropTypes.shape({
      username: PropTypes.string.isRequired
    }).isRequired,
    slug: PropTypes.string.isRequired
  }).isRequired
}

export default Article;
