import React from 'react';
import Modal from '@components/commons/Modal';


const props = {
    title: 'New Modal',
    toggle: false,
    exitModal: jest.fn()
};

const mockClick = jest.fn(props.toggle = false);

describe('<Modal />', () => {
    it('should render a modal correctly', () => {
        const shallowWrapper = shallow(<Modal {...props}><h1>Hello World</h1></Modal>);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Modal')).toBeTruthy();
    });

    it('should render a when toggle is true', () => {
      const shallowWrapper = shallow(<Modal {...props} toggle><h1>Hello World</h1></Modal>);

      expect(shallowWrapper.find('.modal-container')).toBeTruthy();
      expect(shallowWrapper.find('h2').text()).toEqual('New Modal');
    });

    it('should exit the toggle when exit is clicked', () => {
      const shallowWrapper = mount(<Modal {...props} exitModal={mockClick}><h1>Hello World</h1></Modal>);

      expect(shallowWrapper.props().toggle).toEqual(false);
    });
});
