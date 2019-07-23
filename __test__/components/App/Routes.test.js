import React from 'react';
import Routes from '@components/App/Routes';


describe('Routes', () => {
    it('should render the Routes component correctly', () => {
        const shallowWrapper = shallow(<Routes />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
    });
});