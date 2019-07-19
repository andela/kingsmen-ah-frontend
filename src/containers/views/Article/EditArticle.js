import { connect } from 'react-redux';
import EditArticle from '@components/views/Article/EditArticle';
import { getSingleArticle, editArticle } from '@actions/articles';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loading: state.article.loading,
  article: state.article.article,
  errors: state.article.errors
});

export default connect(mapStateToProps, { getSingleArticle, editArticle })(withRouter(EditArticle));
