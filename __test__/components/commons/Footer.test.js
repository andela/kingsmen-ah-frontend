import React from 'react';
import Footer from '@components/commons/utilities/Footer';

const setup = () => {
  const wrapper = shallow(<Footer />);
  return wrapper;
};

describe('<Footer />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('should display footer message', () => {
    const text = wrapper.find('p').text();
    expect(text).toEqual('Copyright Authors‘ Haven © 2019 Kingsmen');
  });
});
