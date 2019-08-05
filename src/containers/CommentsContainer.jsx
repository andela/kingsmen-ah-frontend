import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '@components/commons/utilities/Footer';
import CommentCard from '@components/commons/Cards/CommentCard';
import CreateCommentCard from '@components/commons/Cards/CreateCommentCard';
import formatDate from '@components/commons/utilities/helpers'
import { getComments, postComment, delComment, likeComment, unlikeComment } from '../actions/comments';

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
      this.clearComment(e);
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
      const { CommentLikes } = comment;
      const date = formatDate(comment.createdAt);
      return (
        <CommentCard
          key={comment.id}
          name={comment.author.username}
          alt={comment.author.username}
          body={comment.body}
          createdAt={date.short}
          del={() => this.deleteComment(comment.id)}
          likes={comment.CommentLikes.length}
          userLike={this.findLike(CommentLikes)}
          like={() => this.handleLikes(comment.id)}
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
  clearComment = (e) => {
    e.preventDefault()
    this.setState({
      comment: '',
      errors: {}
    });
  }

  /**
  *
  * @param {*} CommentLikes
  * @returns
  * @memberof CommentsContainer
  */
  findLike(CommentLikes) {
    let { user } = this.props;

    if (CommentLikes.filter(like => like.userId === user.id).length > 0) {
      return true
    } else {
      return false
    }
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


  /**
   *
   * Handle like/unlike logic
   * @param {*} id of the comment
   * @memberof CommentsContainer
   */
  handleLikes(id) {
    const { slug } = this.props;
    const { likeComment, unlikeComment, user, comments } = this.props;

    const userId = user.id;

    const comment = comments.filter(comment => comment.id === id);
    const { CommentLikes } = comment[0];

    if (CommentLikes.filter(like => like.userId === userId).length > 0) {
      unlikeComment(id, slug);
    } else {
      likeComment(id, slug);
    }
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
    id: PropTypes.string,
  }).isRequired,
  profile: PropTypes.shape({
    avatar: PropTypes.string,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  getComments: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
  delComment: PropTypes.func.isRequired,
  likeComment: PropTypes.func.isRequired,
  unlikeComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  comments: state.comments.comments,
  user: state.auth.user,
  profile: state.auth.profile
});

export default connect(mapStateToProps, { getComments, postComment, delComment, likeComment, unlikeComment })(withRouter(CommentsContainer));
