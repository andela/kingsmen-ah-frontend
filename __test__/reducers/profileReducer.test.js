import profileReducer from '@reducers/profile';
import { profileInitialState } from '../setup/mockData';


describe('Profile Reducer', () => {
    it('should return initial state', () => {
      const store = profileReducer(profileInitialState, '');
      expect(store).toEqual(profileInitialState);
    });
});
