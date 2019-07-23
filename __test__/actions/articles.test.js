import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';
import MockAdapter from 'axios-mock-adapter';
import {
  isLoading,
  addArticleSuccess,
  addArticleFailure,
  fetchArticleSuccess,
  fetchArticleFailure,
  fetchArticlesSuccess,
  fetchArticlesFailure,
  editArticleSuccess,
  editArticleFailure,
  deleteArticleSuccess,
  deleteArticleFailure,
  getTagsSuccess,
  getTagsFailure,
  createNewArticle,
  editArticle,
  getAllArticles,
  getAllTags,
  getSingleArticle,
  deleteArticle
} from '@actions/articles';

const url = 'https://kingsmen-ah-backend-staging.herokuapp.com/api/v1';
const middlewares = [thunk];
const mockReq = new MockAdapter(axios);
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  loading: false,
  isAuthenticated: true,
  errors: null,
  article: {},
  articles: [],
  tags: []
});
const history = { push: jest.fn() };
const newArticle = {
  title: 'Hello World',
  body: 'This is andela',
  tags: ['andela']
};

describe('Article actions', () => {
  describe('isLoading', () => {
      it('should return an object with type IS_LOADING', () => {
          const articleAction = isLoading();

          expect(articleAction).toEqual({ type: 'IS_LOADING' });
      });
  });

  describe('addArticleSuccess', () => {
    it('should return an object with type ADD_ARTICLE_SUCCESS', () => {
        const articlePayload = { title: 'Hello World' }
        const articleAction = addArticleSuccess(articlePayload);

        expect(articleAction).toEqual({ type: 'ADD_ARTICLE_SUCCESS', payload: { title: 'Hello World' } });
    });
  });

  describe('addArticle Failure', () => {
    it('should return an object with type ADD_ARTICLE_FAILURE', () => {
        const articleAction = addArticleFailure('error');

        expect(articleAction).toEqual({ type: 'ADD_ARTICLE_FAILURE', payload: 'error' });
    });
  });

  describe('fetchArticleSuccess', () => {
    it('should return an object with type GET_ARTICLE_SUCCESS', () => {
        const articlePayload = { title: 'Hello World' }
        const articleAction = fetchArticleSuccess(articlePayload);

        expect(articleAction).toEqual({ type: 'GET_ARTICLE_SUCCESS', payload: { title: 'Hello World' } });
    });
  });

  describe('fetchArticleFailure', () => {
    it('should return an object with type GET_ARTICLE_FAILURE', () => {
        const articleAction = fetchArticleFailure('error');

        expect(articleAction).toEqual({ type: 'GET_ARTICLE_FAILURE', payload: 'error' });
    });
  });

  describe('fetchArticlesSuccess', () => {
    it('should return an object with type GET_ARTICLES_SUCCESS', () => {
        const articlePayload = { title: 'Hello World' }
        const articleAction = fetchArticlesSuccess(articlePayload);

        expect(articleAction).toEqual({ type: 'GET_ARTICLES_SUCCESS', payload: { title: 'Hello World' } });
    });
  });

  describe('fetchArticlesFailure', () => {
    it('should return an object with type GET_ARTICLES_FAILURE', () => {
        const articleAction = fetchArticlesFailure('error');

        expect(articleAction).toEqual({ type: 'GET_ARTICLES_FAILURE', payload: 'error' });
    });
  });

  describe('editArticlesSuccess', () => {
    it('should return an object with type EDIT_ARTICLE_SUCCESS', () => {
        const articlePayload = { title: 'Hello World' }
        const articleAction = editArticleSuccess(articlePayload);

        expect(articleAction).toEqual({ type: 'EDIT_ARTICLE_SUCCESS', payload: { title: 'Hello World' } });
    });
  });

  describe('editArticlesFailure', () => {
    it('should return an object with type EDIT_ARTICLES_FAILURE', () => {
        const articleAction = editArticleFailure('error');

        expect(articleAction).toEqual({ type: 'EDIT_ARTICLE_FAILURE', payload: 'error' });
    });
  });

  describe('deleteArticleSuccess', () => {
    it('should return an object with type DELETE_ARTICLE_SUCCESS', () => {
        const articlePayload = { title: 'Hello World' }
        const articleAction = deleteArticleSuccess(articlePayload);

        expect(articleAction).toEqual({ type: 'DELETE_ARTICLE_SUCCESS', payload: { title: 'Hello World' } });
    });
  });

  describe('deleteArticleFailure', () => {
    it('should return an object with type DELETE_ARTICLE_FAILURE', () => {
        const articleAction = deleteArticleFailure('error');

        expect(articleAction).toEqual({ type: 'DELETE_ARTICLE_FAILURE', payload: 'error' });
    });
  });

  describe('getAllTagsSuccess', () => {
    it('should return an object with type GET_TAGS_SUCCESS', () => {
        const articlePayload = ['andela'];
        const articleAction = getTagsSuccess(articlePayload);

        expect(articleAction).toEqual({ type: 'GET_TAGS_SUCCESS', payload: ['andela'] });
    });
  });

  describe('getAllTagsFailure', () => {
    it('should return an object with type GET_TAGS_FAILURE', () => {
        const articleAction = getTagsFailure('error');

        expect(articleAction).toEqual({ type: 'GET_TAGS_FAILURE', payload: 'error' });
    });
  });

  describe('Actions', () => {
    afterEach(() => {
        store.clearActions();
        localStorage.clear();
        jest.clearAllMocks();
    });

    describe('Fetching', () => {
        beforeEach(() => {
            moxios.install(axios);
        });

        afterEach(() => {
            moxios.uninstall(axios);
        });

        it('should return data correctly from an create new article', (done) => {
          const expectedActions = ['IS_LOADING', 'ADD_ARTICLE_SUCCESS'];

          mockReq.onPost(`${url}/articles`).reply(201, {
              title: 'Hello World',
              body: 'This is the body',
              slug: 'Hello-World-45678'
          });

          store.dispatch(createNewArticle(newArticle, history)).then(() => {
              const dispatchedActions = store.getActions();
  
              const actionTypes = dispatchedActions.map(action => action.type);
  
              expect(actionTypes).toEqual(expectedActions);
          });
          done();
      });

      it('should return error from an create new article', (done) => {
        const expectedActions = ['IS_LOADING', 'ADD_ARTICLE_FAILURE'];

        mockReq.onGet(url).reply(400, { errors: { global: 'errors' } });

        store.dispatch(createNewArticle(newArticle, history)).catch(() => {
          const dispatchedActions = store.getActions();

          const actionTypes = dispatchedActions.map(action => action.type);

          expect(actionTypes).toEqual(expectedActions);
        });
        done();
      });

      it('should return data correctly from a get article', (done) => {
        const expectedActions = ['IS_LOADING', 'GET_ARTICLE_SUCCESS'];

        mockReq.onGet(`${url}/articles/1`).reply(200, {
            title: 'Hello World',
            body: 'This is the body',
            slug: 'Hello-World-45678'
        });

        store.dispatch(getSingleArticle(1)).then(() => {
            const dispatchedActions = store.getActions();

            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        });
        done();
      });

      it('should return error from a single article', (done) => {
        const expectedActions = ['IS_LOADING', 'GET_ARTICLE_FAILURE'];

        mockReq.onGet(`${url}/articles/1`).reply(400, { errors: { global: 'errors' } });

        store.dispatch(getSingleArticle(1)).catch(() => {
          const dispatchedActions = store.getActions();

          const actionTypes = dispatchedActions.map(action => action.type);

          expect(actionTypes).toEqual(expectedActions);
        });
        done();
      });

      it('should return data correctly from get all articles', (done) => {
        const expectedActions = ['IS_LOADING', 'GET_ARTICLES_SUCCESS'];

        mockReq.onGet(`${url}/articles`).reply(200, [{
            title: 'Hello World',
            body: 'This is the body',
            slug: 'Hello-World-45678'
        }]);

        store.dispatch(getAllArticles()).then(() => {
            const dispatchedActions = store.getActions();

            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        });
        done();
      });

      it('should return error from a all articles', (done) => {
        const expectedActions = ['IS_LOADING', 'GET_ARTICLES_FAILURE'];

        mockReq.onGet(`${url}/articles`).reply(400, { errors: { global: 'errors' } });

        store.dispatch(getAllArticles()).catch(() => {
          const dispatchedActions = store.getActions();

          const actionTypes = dispatchedActions.map(action => action.type);

          expect(actionTypes).toEqual(expectedActions);
        });
        done();
      });

      it('should return data correctly from edit an article', (done) => {
        const expectedActions = ['IS_LOADING', 'EDIT_ARTICLE_SUCCESS'];

        mockReq.onPut(`${url}/articles/1`).reply(200, {
            title: 'Hello World',
            body: 'This is the body',
            slug: 'Hello-World-45678'
        });

        store.dispatch(editArticle(1, { title: 'Hi', body: 'Hello' }, history)).then(() => {
            const dispatchedActions = store.getActions();

            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        });
        done();
      });

      it('should return error from edit an article', (done) => {
        const expectedActions = ['IS_LOADING', 'EDIT_ARTICLE_FAILURE'];

        mockReq.onPut(`${url}/articles/1`).reply(400, { errors: { global: 'errors' } });

        store.dispatch(editArticle(1, { title: 'Hi', body: 'Hello' }, history)).catch(() => {
          const dispatchedActions = store.getActions();

          const actionTypes = dispatchedActions.map(action => action.type);

          expect(actionTypes).toEqual(expectedActions);
        });
        done();
      });

      it('should return data correctly from get all tags', (done) => {
        const expectedActions = ['IS_LOADING', 'GET_TAGS_SUCCESS'];

        mockReq.onGet(`${url}/tags`).reply(200, [
          {
            tags: ['andela']
          }
        ]);

        store.dispatch(getAllTags(1)).then(() => {
            const dispatchedActions = store.getActions();

            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        });
        done();
      });

      it('should return error from a get all tags', (done) => {
        const expectedActions = ['IS_LOADING', 'GET_TAGS_FAILURE'];

        mockReq.onGet(url).reply(400, { errors: { global: 'errors' } });

        store.dispatch(getAllTags(1)).catch(() => {
          const dispatchedActions = store.getActions();

          const actionTypes = dispatchedActions.map(action => action.type);

          expect(actionTypes).toEqual(expectedActions);
        });
        done();
      });

      it('should return data correctly from delete an article', (done) => {
        const expectedActions = ['IS_LOADING', 'DELETE_ARTICLE_SUCCESS'];

        mockReq.onDelete(`${url}/articles/1`).reply(200, {});

        store.dispatch(deleteArticle(1)).then(() => {
            const dispatchedActions = store.getActions();

            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        });
        done();
      });

      it('should return error from delete an article', (done) => {
        const expectedActions = ['IS_LOADING', 'DELETE_ARTICLE_FAILURE'];

        mockReq.onDelete(url).reply(400, { errors: { global: 'errors' } });

        store.dispatch(deleteArticle(1)).catch(() => {
          const dispatchedActions = store.getActions();

          const actionTypes = dispatchedActions.map(action => action.type);

          expect(actionTypes).toEqual(expectedActions);
        });
        done();
      });
    });
  });
});