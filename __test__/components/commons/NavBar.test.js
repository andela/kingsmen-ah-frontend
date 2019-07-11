import React from 'react';
import NavBar from '@components/commons/NavBar';


describe('<NavBar />', () => {
  it('should render the NavBar component correctly', () => {
    const shallowWrapper = shallow(<NavBar />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('NavBar')).toBeTruthy();
  });
});
