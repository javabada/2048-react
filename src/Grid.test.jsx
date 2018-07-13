import React from 'react';
import { mount } from 'enzyme';
import Grid from './Grid';
import Tile from './Tile';

describe('<Grid />', () => {
  it('renders 16 cell divs', () => {
    const wrapper = mount(<Grid />);
    expect(wrapper.find('div.cell').not('.tile').length).toBe(16);
    wrapper.unmount();
  });

  it('starts game with 2 tiles', () => {
    const wrapper = mount(<Grid />);
    expect(wrapper.find(Tile).length).toBe(2);
    wrapper.unmount();
  });

  it('passes down tile data as props', () => {
    const wrapper = mount(<Grid />);
    wrapper.setState({
      tiles: [{ x: 1, y: 2, value: 8 }],
    });
    expect(wrapper.find(Tile).prop('x')).toBe(1);
    expect(wrapper.find(Tile).prop('y')).toBe(2);
    expect(wrapper.find(Tile).prop('value')).toBe(8);
    wrapper.unmount();
  });
});

describe('event listener', () => {
  it('calls handleKeyDown()', () => {
    const spy = jest.spyOn(Grid.prototype, 'handleKeyDown');
    const wrapper = mount(<Grid />);
    const e = new Event('keydown');
    window.dispatchEvent(e);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('calls handleTouchStart()', () => {
    const spy = jest.spyOn(Grid.prototype, 'handleTouchStart');
    const wrapper = mount(<Grid />);
    const e = new Event('touchstart');
    wrapper.instance().ref.current.dispatchEvent(e);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('calls handleTouchEnd()', () => {
    const spy = jest.spyOn(Grid.prototype, 'handleTouchEnd');
    const wrapper = mount(<Grid />);
    const e = new Event('touchend');
    wrapper.instance().ref.current.dispatchEvent(e);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });
});

describe('touch event', () => {
  it('stores touchstart position in state', () => {
    const wrapper = mount(<Grid />);
    const mockEvent = {
      touches: [{ clientX: 50, clientY: 50 }],
      preventDefault: () => {},
    };
    wrapper.instance().handleTouchStart(mockEvent);
    expect(wrapper.state('touchStartPos')).toEqual({ x: 50, y: 50 });
    wrapper.unmount();
  });

  it('resolves direction to left', () => {
    const spy = jest.spyOn(Grid.prototype, 'moveTiles');
    const wrapper = mount(<Grid />);
    wrapper.setState({
      touchStartPos: { x: 50, y: 50 },
    });
    const mockEvent = {
      changedTouches: [{ clientX: 20, clientY: 60 }],
    };
    wrapper.instance().handleTouchEnd(mockEvent);
    expect(spy).toHaveBeenCalledWith('LEFT');
    spy.mockClear();
    wrapper.unmount();
  });

  it('resolves direction to down', () => {
    const spy = jest.spyOn(Grid.prototype, 'moveTiles');
    const wrapper = mount(<Grid />);
    wrapper.setState({
      touchStartPos: { x: 50, y: 50 },
    });
    const mockEvent = {
      changedTouches: [{ clientX: 60, clientY: 70 }],
    };
    wrapper.instance().handleTouchEnd(mockEvent);
    expect(spy).toHaveBeenCalledWith('DOWN');
    spy.mockClear();
    wrapper.unmount();
  });

  it('does not move', () => {
    const spy = jest.spyOn(Grid.prototype, 'moveTiles');
    const wrapper = mount(<Grid />);
    wrapper.setState({
      touchStartPos: { x: 50, y: 50 },
    });
    const mockEvent = {
      changedTouches: [{ clientX: 50, clientY: 50 }],
    };
    wrapper.instance().handleTouchEnd(mockEvent);
    expect(spy).not.toHaveBeenCalled();
    spy.mockClear();
    wrapper.unmount();
  });
});

describe('moveTiles()', () => {
  it('moves and adds a new tile', () => {
    const wrapper = mount(<Grid />);
    wrapper.setState({
      tiles: [{ x: 3, y: 0, value: 4 }],
    });
    wrapper.instance().moveTiles('LEFT');
    wrapper.update();
    expect(wrapper.find(Tile).length).toBe(2);
    wrapper.unmount();
  });

  it('does not move nor add a new tile', () => {
    const wrapper = mount(<Grid />);
    wrapper.setState({
      tiles: [{ x: 0, y: 0, value: 4 }],
    });
    wrapper.instance().moveTiles('LEFT');
    wrapper.update();
    expect(wrapper.find(Tile).length).toBe(1);
    wrapper.unmount();
  });
});
