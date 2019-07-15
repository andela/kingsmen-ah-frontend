import reducer from '@reducers/articles';

const state = {
  loading: false,
  errors: {},
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
        articles: {title: 'Kingsmen'}
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
        articles: {error: 'Error'}
    });
  });

  it('should handle _ARTICLE_SUCCESS action', () => {
    const newState = reducer(state, {
        type: 'ADD_ARTICLE_SUCCESS',
        payload: { title: 'Kingsmen' },
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        articles: {title: 'Kingsmen'}
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
        articles: {error: 'Error'}
    });
  });
});
