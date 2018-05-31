import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

const propTypes = {
  value: PropTypes.number,
};

const defaultProps = {
  value: null,
};

const Cell = ({ value }) => (
  <div className="cell">
    {value}
  </div>
);

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;
