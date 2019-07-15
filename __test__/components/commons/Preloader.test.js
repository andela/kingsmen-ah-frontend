import React from 'react';
import Preloader from '@components/commons/Preloader';


const props = {
    type: 'button',
    height: 40,
    width: 40,
    style: 'TailSpin',
    color: 'green'
};

describe('<Preloader />', () => {
    it('should render a preloader with type ~ button', () => {
        const shallowWrapper = shallow(<Preloader {...props} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Preloader')).toBeTruthy();
    });

    it('should render a preloader with type ~ main-page', () => {
        const shallowWrapper = shallow(<Preloader {...props} type="main-preloder" />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('Preloader')).toBeTruthy();
        expect(shallowWrapper.find('main-preloder')).toBeTruthy();
    });
});
