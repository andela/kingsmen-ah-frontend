import {
  GET_COMMENTS, POST_COMMENT, DELETE_COMMENT, GET_COMMENTS_ERROR, POST_COMMENT_ERROR, DELETE_COMMENT_ERROR
} from '../actions/types';

const initialState = {
  comments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload.reverse(),
      };

    case POST_COMMENT:
      return {
        ...state,
        comments: action.payload.reverse()
      };

    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload)
      };

    case GET_COMMENTS_ERROR:
      return action.payload;

    case POST_COMMENT_ERROR:
      return action.payload;

    case DELETE_COMMENT_ERROR:
      return action.payload;

    default: return state;
  }
}
