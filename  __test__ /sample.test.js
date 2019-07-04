import React from 'react';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import App from '@components/App';

configure({ adapter: new Adapter() });

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
