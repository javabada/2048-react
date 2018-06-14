import React from 'react';
import { mount } from 'enzyme';
import Grid from './Grid';
import Cell from './Cell';

describe('<Grid />', () => {
  it('renders 16 <Cell /> components', () => {
    const wrapper = mount(<Grid />);
    expect(wrapper.find(Cell).length).toBe(16);
    wrapper.unmount();
  });

  it('initializes a new game with 2 tiles', () => {
    const wrapper = mount(<Grid />);
    expect(wrapper.state('tiles').length).toBe(2);
    wrapper.unmount();
  });

  it('passes a tile\'s value to the cell', () => {
    const wrapper = mount(<Grid />);
    wrapper.setState({
      tiles: [
        { x: 0, y: 0, value: 8 },
      ],
    });
    expect(wrapper.find(Cell).first().prop('value')).toBe(8);
    wrapper.unmount();
  });

  it('passes null when cell is empty', () => {
    const wrapper = mount(<Grid />);
    wrapper.setState({ tiles: [] });
    expect(wrapper.find(Cell).first().prop('value')).toBe(null);
    wrapper.unmount();
  });
});

describe('event listener', () => {
  it('calls handleKeyDown() on keydown event', () => {
    const spy = jest.spyOn(Grid.prototype, 'handleKeyDown');
    const wrapper = mount(<Grid />);
    const e = new Event('keydown');
    window.dispatchEvent(e);
    expect(spy).toHaveBeenCalled();
    wrapper.unmount();
  });

  it('calls handleTouchStart() on touchstart event', () => {
    const spy = jest.spyOn(Grid.prototype, 'handleTouchStart');
    const wrapper = mount(<Grid />);
    const e = new Event('touchstart');
    wrapper.instance().ref.current.dispatchEvent(e);
    expect(spy).toHaveBeenCalled();
    wrapper.unmount();
  });

  it('calls handleTouchEnd() on touchend event', () => {
    const spy = jest.spyOn(Grid.prototype, 'handleTouchEnd');
    const wrapper = mount(<Grid />);
    const e = new Event('touchend');
    wrapper.instance().ref.current.dispatchEvent(e);
    expect(spy).toHaveBeenCalled();
    wrapper.unmount();
  });
});
