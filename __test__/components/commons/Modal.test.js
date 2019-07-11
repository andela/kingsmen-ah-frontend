import React from 'react';
import Modal from '@components/commons/Modal';


const props = {
    title: 'New Modal',
    toggle: false,
    exitModal: jest.fn()
};

const mockClick = jest.fn(props.toggle = false);

describe('<Modal />', () => {
    const modalRoot = global.document.createElement('div');
    modalRoot.setAttribute('id', 'app');
    const body = global.document.querySelector('body');
    body.appendChild(modalRoot);


    it('should render a modal correctly', () => {
        const shallowWrapper = mount(<Modal {...props}><h1>Hello World</h1></Modal>);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Modal')).toBeTruthy();
        shallowWrapper.unmount();
    });

    it('should exit the toggle when exit is clicked', () => {
      const shallowWrapper = mount(<Modal {...props} exitModal={mockClick}><h1>Hello World</h1></Modal>);

      expect(shallowWrapper.props().toggle).toEqual(false);
    });
});
