import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentCard from '../common/CommentCard';
import CreateCommentCard from '../common/CreateCommentCard';
import { getComments, postComment, delComment } from '../../actions/comments';

/**
 *
 * Container component for the adding and viewing commments
 * @export
 * @class CommentsContainer
 * @extends {Component}
 */
export class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    }
  }

  componentDidMount() {
    const { getComments: loadComments } = this.props;
    loadComments();
  }

  /**
   *
   * Handle posting of comments
   * @memberof CommentsContainer
   */
  onSubmit = (e) => {
    e.preventDefault();
    const { comment } = this.state;
    const { postComment } = this.props;
    const newComment = { comment };

    postComment(newComment);
    this.clearComment();
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
   * Delete a comment
   * @memberof CommentsContainer
   */
  deleteComment = (id) => {
    const { delComment } = this.props;
    delComment(id);
  }

  /**
   *
   * Creates a comment listing
   * @memberof CommentsContainer
   */
  createCommentListings = (comments) => {
    const data = comments && comments.map(comment => {
      return (
        <CommentCard
          key={comment.id}
          name={comment.author.username}
          alt={comment.author.username}
          body={comment.body}
          createdAt={comment.createdAt}
          delComment={this.deleteComment(comment.id)}
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
      comment: ''
    });
  }

  render() {
    let results;
    const { comments } = this.props;
    const { comment } = this.state;

    if (comments) {
      results = comments.payload
    }

    const data = this.createCommentListings(results);

    return (
      <Fragment>
        <CreateCommentCard
          name='Test Name'
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          value={comment}
        />
        {data}
        <CommentCard />
      </Fragment>
    );
  }
}

CommentsContainer.propTypes = {
  comments: PropTypes.shape({
    status: PropTypes.number,
    message: PropTypes.string,
    payload: PropTypes.arrayOf(PropTypes.shape([{
      id: PropTypes.number,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      body: PropTypes.string,
      likeCount: PropTypes.string,
      author: PropTypes.shape({
        username: PropTypes.string,
        profile: PropTypes.shape({
          bio: PropTypes.string,
          avatar: PropTypes.string
        })
      }),
    }])),
    map: PropTypes.func
  }).isRequired,
  getComments: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
  delComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  comments: state.comments.comments,
  errors: state.errors
});

export default connect(mapStateToProps, { getComments, postComment, delComment })(withRouter(CommentsContainer));
