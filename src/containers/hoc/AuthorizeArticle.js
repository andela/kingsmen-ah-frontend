import { connect } from 'react-redux';
import AuthorizeArticle from '@components/hoc/AuthorizeArticle';

/**
 * Authorize Article User
 * @function AuthorizeArticle
 * @param {JSX} MyComponent - Dynamic
 * @return {JSX} ConnectedComponent
 */
export default (MyComponent) => {
    const mapStateToProps = state => ({
        article: state.article.article,
        user: state.auth.user,
        loading: state.auth.loading,
        MyComponent
    });

    return connect(mapStateToProps)(AuthorizeArticle);
};