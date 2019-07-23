import { connect } from 'react-redux';
import Home from '@components/views/Home';
import { getAllArticles } from '@actions/articles';

const mapStateToProps = state => ({
  isLoading: state.article.loading,
  articles: state.article.articles,
  errors: state.article.errors,
});

export default connect(mapStateToProps, { getAllArticles })(Home);