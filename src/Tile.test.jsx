import React from 'react';
import { shallow } from 'enzyme';
import Tile from './Tile';

describe('<Tile />', () => {
  it('renders its value as text', () => {
    const wrapper = shallow(<Tile x={0} y={0} value={8} animation="add" />);
    expect(wrapper.text()).toBe('8');
  });

  it('uses class derived from its value', () => {
    const wrapper = shallow(<Tile x={0} y={0} value={4} animation="add" />);
    expect(wrapper.hasClass('value-4')).toBe(true);
  });
});
