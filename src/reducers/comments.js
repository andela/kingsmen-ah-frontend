import {
  GET_COMMENTS, POST_COMMENT, DELETE_COMMENT
} from '../actions/types';

const initialState = {
  comments: [],
  comment: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };

    case POST_COMMENT:
      return {
        ...state,
        comments: [action.payload, ...state.comments]
      };

    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload)
      };

    default: return state;
  }
}
