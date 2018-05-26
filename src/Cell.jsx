import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';

export default function Cell(props) {
  return <div className="cell">{props.value}</div>;
}

Cell.propTypes = {
  value: PropTypes.number,
};

Cell.defaultProps = {
  value: null,
};
