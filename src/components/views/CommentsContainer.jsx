import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '@components/commons/utilities/Footer';
import CommentCard from '../commons/Cards/CommentCard';
import CreateCommentCard from '../../containers/CreateCommentCard';
import { getComments, postComment, delComment } from '../../actions/comments';
import formatDate from '../commons/utilities/helpers'

/**
 *
 * Container component for the adding, viewing and deleting commments
 * @export
 * @class CommentsContainer
 * @extends {Component}
 */
export class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      errors: {}
    }
  }

  componentDidMount() {
    const { slug } = this.props;
    const { getComments: loadComments } = this.props;
    loadComments(slug);
  }

  /**
   *
   * Handle posting of comments
   * @memberof CommentsContainer
   */
  onSubmit = (e) => {
    e.preventDefault();
    const { slug } = this.props;
    const err = this.validate();
    if (!err) {
      const { comment } = this.state;
      const { postComment } = this.props;
      const newComment = { comment }
      postComment(newComment, slug);
      this.clearComment();
    }
  }

  /**
   *
   * Bind the local state to changes on comment textarea
   * @memberof CommentsContainer
   */
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   *
   * Valdate comment field
   * @memberof CommentsContainer
   */
  validate = () => {
    let isError = false
    let { comment, errors } = this.state;

    if (comment.length < 5 || comment.length > 500) {
      isError = true;
      errors.commentError = 'Comment must be between 5 - 500 characters'
    }

    this.setState((prevState) => ({
      ...prevState,
      ...errors
    }))

    return isError;
  }

  /**
   *
   * Creates a comment listing
   * @memberof CommentsContainer
   */
  createCommentListings = (comments) => {
    const data = comments.map(comment => {
      const date = formatDate(comment.createdAt);
      return (
        <CommentCard
          key={comment.id}
          name={comment.author.username}
          alt={comment.author.username}
          body={comment.body}
          createdAt={date.long}
          del={() => this.deleteComment(comment.id)}
        />
      );
    });

    return data;
  }

  /**
   *
   * Clear comment textarea
   * @memberof CommentsContainer
   */
  clearComment = () => {
    this.setState({
      comment: '',
      errors: {}
    });
  }

  /**
   *
   * Delete a comment
   * @memberof CommentsContainer
   */
  deleteComment(id) {
    const { slug } = this.props;
    const { delComment } = this.props;
    delComment(id, slug);
  }

  render() {
    const { comments, user, profile: { avatar } } = this.props;
    const { comment, errors } = this.state;

    const data = this.createCommentListings(comments);

    return (
      <Fragment>
        <CreateCommentCard
          name={user.username}
          avatar={avatar}
          onChange={this.onChange}
          submit={this.onSubmit}
          reset={this.clearComment}
          value={comment}
          commentError={errors.commentError}
        />
        {data}
        <Footer />
      </Fragment>
    );
  }
}

CommentsContainer.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
  profile: PropTypes.shape({
    avatar: PropTypes.string,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  getComments: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
  delComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  comments: state.comments.comments,
  user: state.auth.user,
  profile: state.auth.profile
});

export default connect(mapStateToProps, { getComments, postComment, delComment })(withRouter(CommentsContainer));
