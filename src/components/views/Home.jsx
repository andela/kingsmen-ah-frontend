import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageLayout from '@components/layout/PageLayout';
import ArticleCard from '@components/commons/Cards/Article';
import './Article/index.scss';


class Home extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf,
    getAllArticles: PropTypes.func.isRequired
  }

  static defaultProps =  {
    articles: null
  }

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    const { getAllArticles } = this.props;
    getAllArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <PageLayout>
        <div className="article-container mx-auto mt-6">
          <div className="flex flex-wrap">
            {articles.map((article, index) => {
              return (
                <ArticleCard key={index.toString()} isSmall={index === 0 ? false : index % 9 === 0 ? false : true} article={article} />
              );
            })}
          </div>
        </div>
      </PageLayout>
    );
  }
}

export default Home;
