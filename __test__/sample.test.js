import React from 'react';
import App from '@components/App';


describe('SAMPLE TEST', () => {
  it('should return a successful sample test ', () => {
    expect(true).toBeTruthy();
  });
});

describe('App', () => {
  it('should render the App component correctly', () => {
    const shallowWrapper = shallow(<App />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });
});
