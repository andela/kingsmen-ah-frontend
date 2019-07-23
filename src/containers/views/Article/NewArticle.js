import { connect } from 'react-redux';
import NewArticle from '@components/views/Article/NewArticle';
import { createNewArticle } from '@actions/articles';

const mapStateToProps = state => ({
  isLoading: state.article.loading,
  articles: state.article.articles,
  errors: state.article.errors,
});

export default connect(mapStateToProps, { createNewArticle })(NewArticle);