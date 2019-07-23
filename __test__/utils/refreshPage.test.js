import refreshPage from '@utils/refreshPage';


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