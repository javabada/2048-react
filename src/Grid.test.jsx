import React from 'react';
import { mount } from 'enzyme';
import Grid from './Grid';
import Cell from './Cell';

describe('<Grid />', () => {
  it('renders 16 <Cell /> components', () => {
    const wrapper = mount(<Grid />);
    expect(wrapper.find(Cell).length).toBe(16);
  });

  it('initializes a new game with 2 tiles', () => {
    const wrapper = mount(<Grid />);
    expect(wrapper.state('tiles').length).toBe(2);
  });

  it('passes a tile\'s value to the cell', () => {
    const wrapper = mount(<Grid />);
    wrapper.setState({
      tiles: [
        { x: 0, y: 0, value: 8 },
      ],
    });
    expect(wrapper.find(Cell).first().prop('value')).toBe(8);
  });

  it('passes null when cell is empty', () => {
    const wrapper = mount(<Grid />);
    wrapper.setState({ tiles: [] });
    expect(wrapper.find(Cell).first().prop('value')).toBe(null);
  });
});
