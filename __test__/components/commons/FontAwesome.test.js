import React from 'react';
import FontAwesome from '@components/commons/utilities/FontAwesome';


const props = {
  styleClass: '',
  onClick: jest.fn(),
  onKeyDown: jest.fn()
};

describe('<Preloader />', () => {
    it('should render a FontAwesome with type ~ button', () => {
        const shallowWrapper = shallow(<FontAwesome {...props} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('FontAwesome')).toBeTruthy();
    });
});
