import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import CommentsContainer from '@components/views/CommentsContainer';
import CreateCommentCard from '@components/commons/Cards/CreateCommentCard';
import CommentCard from '@components/commons/Cards/CommentCard';
import * as actions from '@actions/comments';

const mockStore = configureStore([thunk]);

const props = {
  user: {
    isAuthenticated: false,
    username: 'kingsmen'
  },
};

const store = mockStore({
  auth: {
    profile: {},
    user: {},
    errors: {}
  },
});

const setup = () => {
  const wrapper = shallow(
    <Provider store={store}>
      <CommentsContainer {...props} />
    </Provider>
  );
  return wrapper;
};

describe('Tests for the <CommentsContainer />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('should have a <CreateCommentCard /> component', () => {
    const props = {
      name: 'Test Name',
      onChange: jest.fn(),
      submit: jest.fn(),
      reset: jest.fn(),
      value: '',
      commentError: ''
    };

    const cardOne = shallow(<CreateCommentCard {...props} />);
    expect(cardOne).toHaveLength(1);
  })

  it('should have a <CommentCard /> component', () => {
    const props = {
      name: 'Test Name',
      key: '',
      body: '',
      createdAt: '',
      del: jest.fn()
    }

    const cardTwo = shallow(<CommentCard {...props} />);
    expect(cardTwo).toHaveLength(1);
  })

  it('should render the <CommentsContainer /> component correctly', () => {
    expect(wrapper).toHaveLength(1);
  });
})

describe('Tests for the comment actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('Dispatches the correct getComments action and payload', () => {
    const expectedActions = []

    store.dispatch(actions.getComments(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the correct postComment action and payload', () => {
    const expectedActions = []

    store.dispatch(actions.postComment(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the correct delComment action and payload', () => {
    const expectedActions = []

    store.dispatch(actions.delComment(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
