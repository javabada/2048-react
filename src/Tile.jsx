import React from 'react';
import PropTypes from 'prop-types';
import './Tile.css';
import getTilePosition from './helpers/getTilePosition';

const propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Tile = ({ x, y, value }) => (
  <div className={`cell tile value-${value}`} style={getTilePosition(x, y)}>
    {value}
  </div>
);

Tile.propTypes = propTypes;

export default Tile;
