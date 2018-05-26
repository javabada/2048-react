import React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';

describe('<Cell />', () => {
  it('outputs the value as a string', () => {
    const wrapper = shallow(<Cell />);
    wrapper.setProps({ value: 8 });
    expect(wrapper.text()).toBe('8');
  });

  it('outputs an empty string when the value is null', () => {
    const wrapper = shallow(<Cell />);
    expect(wrapper.text()).toBe('');
  });
});
