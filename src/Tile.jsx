import React from 'react';
import PropTypes from 'prop-types';
import './Tile.css';

const propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Tile = ({ x, y, value }) => (
  <div
    className={`cell tile value-${value}`}
    style={{
      // position: grid padding + cells + grid gaps
      left: `${1 + 6 * x + x}rem`,
      top: `${1 + 6 * y + y}rem`,
    }}
  >
    {value}
  </div>
);

Tile.propTypes = propTypes;

export default Tile;
