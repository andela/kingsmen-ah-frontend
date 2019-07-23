import React from 'react';
import moxios from 'moxios';
import axios from 'axios';
import sinon from 'sinon';
import { equal } from 'assert';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import CommentsContainer from '@components/views/CommentsContainer';
import CommentCard from '@components/commons/Cards/CommentCard';
import * as actions from '@actions/comments';
import reducers from '@reducers/comments';
import { GET_COMMENTS, POST_COMMENT, DELETE_COMMENT, DELETE_COMMENT_ERROR, GET_COMMENTS_ERROR, POST_COMMENT_ERROR } from '@actions/types';
import CreateCommentCard from '../../src/containers/CreateCommentCard';

const mockStore = configureStore([thunk]);

const props = {
  user: {
    isAuthenticated: false,
    username: 'kingsmen'
  },
};

const store = mockStore({
  auth: {
    isAuthenticated: true,
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

describe('Tests for the COMMENT REDUCER', () => {
  test('INITIAL STATE', () => {
    const action = { type: 'dummy_action' };
    const initialState = { comments: [] };

    expect(reducers(undefined, action)).toEqual(initialState);
  });

  test('Test for GET_COMMENTS', () => {
    const mock = {
      comments: null
    }

    const action = {
      type: 'GET_COMMENTS',
      payload: {
        reverse: jest.fn()
      }
    };

    const state = reducers(undefined, action);

    expect(state).toEqual({
      ...mock.comments
    });
  });

  test('Test for POST_COMMENT', () => {
    const mock = {
      comments: []
    }

    const action = {
      type: 'POST_COMMENT',
      payload: {
        reverse: jest.fn()
      }
    };

    const state = reducers(undefined, action);

    expect(state).toEqual({
      ...mock.comments
    });
  });

  test('Test for DELETE_COMMENT', () => {
    const mock = {
      comments: {
        comments: []
      }
    }

    const action = {
      type: 'DELETE_COMMENT',
      payload: {
        filter: jest.fn()
      }
    };

    const state = reducers(undefined, action);

    expect(state).toEqual({ ...mock.comments });
  });

  test('Test for GET_COMMENTS_ERROR', () => {
    const action = {
      type: 'GET_COMMENTS_ERROR'
    };

    const state = reducers(undefined, action);

    expect(state).toEqual();
  });

  test('Test for POST_COMMENT_ERROR', () => {
    const action = {
      type: 'POST_COMMENT_ERROR'
    };

    const state = reducers(undefined, action);

    expect(state).toEqual();
  });

  test('Test for DELETE_COMMENT_ERROR', () => {
    const action = {
      type: 'DELETE_COMMENT_ERROR'
    };

    const state = reducers(undefined, action);

    expect(state).toEqual();
  });
})

describe('Tests for the COMMENT ACTIONS', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  })


  test('Dispatches the GET_COMMENTS_ERROR action and payload', (done) => {
    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      axios.get('/articles/andela/comments/error').then(onFulfilled)

      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 400
        }).then(() => {
          equal(onFulfilled.called, false)
          done()
        })
      })
    })

    const expectedActions = [{
      type: GET_COMMENTS_ERROR
    }]

    store.dispatch(actions.getComments())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      })
  });

  test('Dispatches the POST_COMMENT_ERROR action and payload', (done) => {
    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      axios.post('/articles/andela/comments/error').then(onFulfilled)

      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 400
        }).then(() => {
          equal(onFulfilled.called, false)
          done()
        })
      })
    })

    const expectedActions = [{
      type: POST_COMMENT_ERROR
    }]

    store.dispatch(actions.postComment())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      })
  });

  test('Dispatches the DELETE_COMMENT_ERROR action and payload', (done) => {
    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      axios.delete('/articles/andela/comments/1/error').then(onFulfilled)

      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 400
        }).then(() => {
          equal(onFulfilled.called, false)
          done()
        })
      })
    })

    const expectedActions = [{
      type: DELETE_COMMENT_ERROR
    }]

    store.dispatch(actions.delComment())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      })
  });

  test('Dispatches the GET_COMMENTS action and payload', (done) => {
    moxios.stubRequest('/articles/1/comments', {
      status: 200,
      response: {
        payload: { title: 'res' }
      }
    })

    const expectedActions = [{
      payload: { title: 'res' },
      type: GET_COMMENTS
    }]

    store.dispatch(actions.getComments(1))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      })
  });

  test('Dispatches the DELETE_COMMENT action and payload', (done) => {
    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      axios.delete('/articles/andela/comments/1').then(onFulfilled)

      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200
        }).then(() => {
          equal(onFulfilled.called, true)
          done()
        })
      })
    })

    const expectedActions = [{
      type: DELETE_COMMENT
    }]

    store.dispatch(actions.delComment())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      })
  });

  test('Dispatches the POST_COMMENT action and payload', (done) => {
    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      axios.post('/articles/andela/comments', {
        status: 200,
        response: {
          payload: { title: 'res' }
        }
      }).then(onFulfilled)

      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: {
            payload: { title: 'res' }
          }
        }).then(() => {
          equal(onFulfilled.called, true)
          done()
        })
      })
    })

    const expectedActions = [{
      type: POST_COMMENT,
      payload: { title: 'res' }
    }]

    store.dispatch(actions.postComment())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      })
  });
});
