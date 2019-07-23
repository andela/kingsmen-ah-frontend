import React from 'react';
import PageLayout from '@components/layout/PageLayout';


describe('<PageLayout />', () => {
  it('should display the page layout correctly', () => {
    const wrapper = shallow(
      <PageLayout>
        <div>Hello World</div>
      </PageLayout>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('PageLayout')).toBeTruthy();
  });

  it('should display the children props properly', () => {
    const wrapper = shallow(
      <PageLayout>
        <div>Hello</div>
      </PageLayout>
    );
    
    expect(wrapper.props().children).toBeTruthy()
  })
});
