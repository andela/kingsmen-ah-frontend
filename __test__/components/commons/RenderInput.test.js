import React from 'react';
import RenderInput from '@components/commons/FormComponents/RenderInput';

const props = {
    name: 'name',
    label: 'Name',
    placeholder: 'Name',
    type: 'text',
    error: "",
    value: '',
    className: '',
    id: 'name',
    handleChange: jest.fn(),
    onFocus: jest.fn(),
};

const mockChange = jest.fn();

describe('Render Input', () => {
    it('should render the RenderInput component when used', () => {
        const shallowWrapper = shallow(<RenderInput {...props} />);

        expect(toJson(shallowWrapper)).toMatchSnapshot();
        expect(shallowWrapper.find('RenderInput')).toBeTruthy();
    });

    it('should call onChange prop', () => {
      const wrapper = mount(<RenderInput {...props} value="new value" handleChange={mockChange} />);

      wrapper.find("input").simulate("change");
      expect(mockChange).toHaveBeenCalled();
      wrapper.unmount();
    });

    it('should call onFocus prop', () => {
      const wrapper = mount(<RenderInput {...props} onFocus={mockChange} />);

      wrapper.find("input").simulate("focus");
      expect(mockChange).toHaveBeenCalled();
    });

    it('should show validation error', () => {
      const wrapper = mount(<RenderInput {...props} error="Required" handleChange={mockChange} />);

      expect(wrapper.find('.text-red-600').text()).toEqual('Required');
    });
});
