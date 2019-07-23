import { connect } from 'react-redux';
import SingleArticle from '@components/views/Article/SingleArticle';
import { getSingleArticle, getAllTags } from '@actions/articles';

const mapStateToProps = state => ({
  isLoading: state.article.loading,
  article: state.article.article,
  tags: state.article.tags,
  errors: state.article.errors,
});

export default connect(mapStateToProps, { getSingleArticle, getAllTags })(SingleArticle);