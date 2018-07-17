import React from 'react';
import PropTypes from 'prop-types';
import './Tile.css';
import getTilePosition from './helpers/getTilePosition';

const propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  previous: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

const defaultProps = {
  previous: null,
};

const Tile = class extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    const { x, y, value } = this.props;
    return (
      <div
        ref={this.ref}
        className={`cell tile value-${value}`}
        style={getTilePosition(x, y)}
      >
        {value}
      </div>
    );
  }
};

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;

export default Tile;
