import reducer from '@reducers/articles';

const state = {
  loading: false,
  errors: {},
  tags: [],
  article: {},
  articles: []
};

describe('Article Reducers', () => {
  it('should return initial State', () => {
    const newState = reducer(undefined, {});

    expect(newState).toEqual(state);
  });

  it('should handle IS_LOADING action', () => {
    const newState = reducer(state, {
        type: 'IS_LOADING'
    });

    expect(newState).toEqual({ ...state, loading: true });
  });

  it('should handle ADD_ARTICLE_SUCCESS action', () => {
    const newState = reducer(state, {
        type: 'ADD_ARTICLE_SUCCESS',
        payload: { title: 'Kingsmen' },
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        article: {title: 'Kingsmen'}
    });
  });

  it('should handle ADD_ARTICLE_FAILURE action', () => {
    const newState = reducer(state, {
        type: 'ADD_ARTICLE_FAILURE',
        payload: { error: 'Error' },
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        errors: {error: 'Error'}
    });
  });

  it('should handle GET_ARTICLE_SUCCESS action', () => {
    const newState = reducer(state, {
        type: 'GET_ARTICLE_SUCCESS',
        payload: { title: 'Kingsmen' },
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        article: {title: 'Kingsmen'}
    });
  });

  it('should handle GET_ARTICLE_FAILURE action', () => {
    const newState = reducer(state, {
        type: 'GET_ARTICLE_FAILURE',
        payload: { error: 'Error' },
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        errors: {error: 'Error'}
    });
  });

  it('should handle GET_ARTICLES_SUCCESS action', () => {
    const newState = reducer(state, {
        type: 'GET_ARTICLES_SUCCESS',
        payload: [{ title: 'Kingsmen' }],
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        articles: [{title: 'Kingsmen'}]
    });
  });

  it('should handle GET_ARTICLES_FAILURE action', () => {
    const newState = reducer(state, {
        type: 'GET_ARTICLES_FAILURE',
        payload: { error: 'Error' },
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        errors: {error: 'Error'}
    });
  });

  it('should handle EDIT_ARTICLE_SUCCESS action', () => {
    const newState = reducer(state, {
        type: 'EDIT_ARTICLE_SUCCESS',
        payload: { title: 'Kingsmen' },
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        article: {title: 'Kingsmen'}
    });
  });

  it('should handle EDIT_ARTICLE_FAILURE action', () => {
    const newState = reducer(state, {
        type: 'EDIT_ARTICLE_FAILURE',
        payload: { error: 'Error' },
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        errors: {error: 'Error'}
    });
  });

  it('should handle GET_TAGS_SUCCESS action', () => {
    const newState = reducer(state, {
        type: 'GET_TAGS_SUCCESS',
        payload: ['andela'],
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        tags: ['andela']
    });
  });

  it('should handle GET_TAGS_FAILURE action', () => {
    const newState = reducer(state, {
        type: 'GET_TAGS_FAILURE',
        payload: { error: 'Error' },
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        errors: {error: 'Error'}
    });
  });
});
