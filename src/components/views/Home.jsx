import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import Header from '@components/commons/Header';
import NavBar from '@components/commons/NavBar';
import ArticleCard from '@components/commons/Cards/Article';
import { fetchArticles, fetchMoreArticles } from '@actions/articles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  displaySmallArticle = (article, stretch) => {
    return (
      <ArticleCard
        key={article.id}
        isSmall
        article={article}
        stretch={stretch}
      />
    );
  };

  displayBigArticle = article => {
    return (
      <ArticleCard
        key={Math.random().toString()}
        isSmall={false}
        article={article}
      />
    );
  };

  smallArticleLoader = () => (
    <div className='w-full mb-4 flex'>
      <div className='mr-2'>
        <Skeleton height={110} width={100} />
      </div>
      <div className='w-full'>
        <Skeleton />
        <p>
          <Skeleton height={40} />
          <Skeleton width={150} />
        </p>
        <Skeleton width={50} />
      </div>
    </div>
  );

  handleScroll = event => {
    const {
      nextPage: { next }
    } = this.props;
    const node = event.target;
    const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
    if (bottom) {
      if (next) {
        const { fetchMoreArticles } = this.props;
        fetchMoreArticles(next);
      }
    }
  };

  render() {
    let {
      user,
      profile,
      isAuthenticated,
      articles,
      loading,
      next,
      loadingMore
    } = this.props;
    const mainArticle = articles.slice(0, 1);
    const subArticles = articles.slice(1, 4);
    const remainingArticles = articles.slice(4);

    return (
      <div
        className='bg-gray-100 font-sans w-full min-h-screen m-0'
        onScroll={this.handleScroll}
        style={{ overflowY: 'scroll', maxHeight: window.innerHeight }}
      >
        <Header
          user={{ user: { ...user, isAuthenticated } }}
          profile={profile}
        />
        <NavBar />

        {!loading ? (
          <div className='container mx-auto mt-6 p-4'>
            <div className='flex flex-col lg:flex-row max-h-lg'>
              <div>
                {mainArticle.length > 0
                  ? this.displayBigArticle(mainArticle[0])
                  : ''}
              </div>
              <div className='md:pl-8 flex flex-col justify-between lg:pb-24 lg:mb-6'>
                {subArticles.map(article =>
                  this.displaySmallArticle(article, true)
                )}
              </div>
            </div>

            <div className='w-full border bg-black mb-2 mt-2 hidden md:block' />

            <div className='flex flex-wrap'>
              {remainingArticles.map(article =>
                this.displaySmallArticle(article)
              )}
            </div>
          </div>
        ) : (
          <Fragment>
            <div className='container mx-auto md:flex'>
              <div className='w-full p-2 h-64 md:w-2/3 mb-2 overflow-hidden'>
                <Skeleton height='1000px' />
              </div>
              <div className='w-full md:w-1/3 p-2'>
                {this.smallArticleLoader()}
                {this.smallArticleLoader()}
              </div>
            </div>
            <div className='container mx-auto'>
              <div className='w-full p-2 md:w-2/3 mb-2 overflow-hidden hidden md:block'>
                <p>
                  <Skeleton height={40} />
                  <Skeleton width={150} />
                </p>
                <Skeleton width={50} />
              </div>
            </div>
            <div className='container mx-auto px-2'>
              <div className='flex flex-wrap justify-between'>
                <div className='w-full md:w-1/4'>
                  {this.smallArticleLoader()}
                </div>
                <div className='w-full md:w-1/4'>
                  {this.smallArticleLoader()}
                </div>
                <div className='w-full md:w-1/4'>
                  {this.smallArticleLoader()}
                </div>
              </div>
            </div>
          </Fragment>
        )}
        {next === '' && !loading && !loadingMore ? (
          <div className='justify-center text-sm italic text-gray-700 text-center mb-6'>
            You are up to date
          </div>
        ) : (
          ''
        )}

        {loadingMore ? (
          <Fragment>
            <div className='container mx-auto px-2'>
              <div className='flex flex-wrap justify-between'>
                <div className='w-full md:w-1/4'>
                  {this.smallArticleLoader()}
                </div>
                <div className='w-full md:w-1/4'>
                  {this.smallArticleLoader()}
                </div>
                <div className='w-full md:w-1/4'>
                  {this.smallArticleLoader()}
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          ''
        )}
      </div>
    );
  }
}

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
  profile: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.shape({}).isRequired,
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.shape([]).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchMoreArticles: PropTypes.func.isRequired,
  nextPage: PropTypes.shape({ next: PropTypes.string }).isRequired,
  next: PropTypes.string,
  loadingMore: PropTypes.bool.isRequired
};

Home.defaultProps = {
  next: ''
};

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.auth.profile,
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors,
  articles: state.article.articles,
  loading: state.article.loading,
  nextPage: state.article.nextPage,
  loadingMore: state.article.loadingMore
});

export default connect(
  mapStateToProps,
  { fetchArticles, fetchMoreArticles }
)(Home);
