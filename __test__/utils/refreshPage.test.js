import refreshPage from '@utils/refreshPage';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4ZGYzYmI5LThkZjMtNDQxMi04NDUwLWJhM2Y2Nzg0ZWM5NiIsImVtYWlsIjoiZGVzcGVhdXh6QGdtYWlsLmNvbSIsImlhdCI6MTU2MzYyOTI5OCwiZXhwIjoxNTYzNzE1Njk4fQ.jVgFx533wCG-DMys8rB4bbJjcdkMVHDm2S5g1k3Dr6w';
const store = {
  dispatch: jest.fn(action => action),
  getState: jest.fn(() => {
    return {
      auth: {
        user: {
          exp: 345678987
        }
      }
    }
  }),
  setAuthToken: jest.fn()
};

describe('Refresh page', () => {
    afterAll(() => jest.clearAllMocks());

    it('should refresh page if jwt token is present and not expired', () => {
        refreshPage(store);

        expect(store.dispatch).toBeCalled();
    });
});