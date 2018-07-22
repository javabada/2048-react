/* eslint-disable object-property-newline */
import React from 'react';
import { shallow } from 'enzyme';
import TileContainer from './TileContainer';
import Tile from './Tile';

describe('<TileContainer />', () => {
  describe('previous is undefined', () => {
    const tile = { x: 0, y: 0, value: 2 };

    it('renders 1 tile', () => {
      const wrapper = shallow(<TileContainer {...tile} />);
      expect(wrapper.find(Tile).length).toBe(1);
    });

    it('animation is add', () => {
      const wrapper = shallow(<TileContainer {...tile} />);
      expect(wrapper.find(Tile).prop('animation')).toBe('add');
    });
  });

  describe('previous has 1 tile', () => {
    const tile = {
      x: 0, y: 0, value: 4,
      previous: [
        { x: 3, y: 0, value: 4 },
      ],
    };

    it('renders 1 tile', () => {
      const wrapper = shallow(<TileContainer {...tile} />);
      expect(wrapper.find(Tile).length).toBe(1);
    });

    it('animation is move', () => {
      const wrapper = shallow(<TileContainer {...tile} />);
      expect(wrapper.find(Tile).prop('animation')).toBe('move');
    });
  });

  describe('previous has 2 tiles', () => {
    const tile = {
      x: 0, y: 0, value: 4,
      previous: [
        { x: 2, y: 0, value: 2 },
        { x: 3, y: 0, value: 2 },
      ],
    };

    it('renders 2 tiles at start', () => {
      const wrapper = shallow(<TileContainer {...tile} />);
      expect(wrapper.find(Tile).length).toBe(2);
    });

    it('animation is mergeStart at start', () => {
      const wrapper = shallow(<TileContainer {...tile} />);
      expect(wrapper.find(Tile).first().prop('animation')).toBe('mergeStart');
    });

    it('renders 1 tile at end', () => {
      const wrapper = shallow(<TileContainer {...tile} />);
      wrapper.setState({ showMerged: true });
      expect(wrapper.find(Tile).length).toBe(1);
    });

    it('animation is mergeEnd at end', () => {
      const wrapper = shallow(<TileContainer {...tile} />);
      wrapper.setState({ showMerged: true });
      expect(wrapper.find(Tile).prop('animation')).toBe('mergeEnd');
    });
  });
});
