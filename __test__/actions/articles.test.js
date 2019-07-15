import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';
import MockAdapter from 'axios-mock-adapter';
import {
  isLoading,
  addArticleSuccess,
  addArticleFailure,
  editArticleSuccess,
  editArticleFailure,
  fetchArticlesSuccess,
  fetchArticlesFailure,
  createNewArticle,
  editArticle,
  getAllArticles
} from '@actions/articles';
import instance from '../../src/config/axios';

const url = 'localhost:3000/articles';
const mockReq = new MockAdapter(instance);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
    loading: false,
    articles: [],
    errors: {}
});


describe('Article Actions', () => {
  describe('authenticating', () => {
    it('should return an bool with type IS_LOADING', () => {
        const authAction = isLoading();

        expect(authAction).toEqual({ type: 'IS_LOADING' });
    });
  });

  describe('addArticleSuccess', () => {
    it('should return an object with type ADD_ARTICLE_SUCCESS', () => {
        const article = { title: 'Kingsmen' };
        const articleAction = addArticleSuccess(article);

        expect(articleAction).toEqual({ type: 'ADD_ARTICLE_SUCCESS', payload: { title: 'Kingsmen' } });
    });
  });

  describe('addArticleFailure', () => {
    it('should return an object with type ADD_ARTICLE_FAILURE', () => {
        const article = { error: 'Error' };
        const articleAction = addArticleFailure(article);

        expect(articleAction).toEqual({ type: 'ADD_ARTICLE_FAILURE', payload: { error: 'Error' } });
    });
  });

  describe('editArticleSuccess', () => {
    it('should return an object with type EDIT_ARTICLE_SUCCESS', () => {
        const article = { title: 'Kingsmen' };
        const articleAction = editArticleSuccess(article);

        expect(articleAction).toEqual({ type: 'EDIT_ARTICLE_SUCCESS', payload: { title: 'Kingsmen' } });
    });
  });

  describe('editArticleFailure', () => {
    it('should return an object with type EDIT_ARTICLE_FAILURE', () => {
        const article = { error: 'Error' };
        const articleAction = editArticleFailure(article);

        expect(articleAction).toEqual({ type: 'EDIT_ARTICLE_FAILURE', payload: { error: 'Error' } });
    });
  });

  describe('fetchArticlesFailure', () => {
    it('should return an object with type GET_ARTICLES_SUCCESS', () => {
        const article = { data: [] };
        const articleAction = fetchArticlesSuccess(article);

        expect(articleAction).toEqual({ type: 'GET_ARTICLES_SUCCESS', payload: { data: [] } });
    });
  });

  describe('fetchArticlesFailure', () => {
    it('should return an object with type GET_ARTICLES_FAILURE', () => {
        const article = { error: 'Error' };
        const articleAction = fetchArticlesFailure(article);

        expect(articleAction).toEqual({ type: 'GET_ARTICLES_FAILURE', payload: { error: 'Error' } });
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

      it('should return an added article correctly', () => {
        const expectedActions = ['IS_LOADING', 'ADD_ARTICLE_SUCCESS'];

        mockReq.onGet(url).reply(200, {
          title: 'Hello World',
          image: '',
          body: {
            timestamp: 123456789,
            blocks: [
              
            ]
          }
        });

        return store.dispatch(createNewArticle()).then(() => {
            const dispatchedActions = store.getActions();

            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        });
    });
    });
  });
});
