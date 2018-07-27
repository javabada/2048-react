import React from 'react';
import PropTypes from 'prop-types';
import 'web-animations-js'; // web animations api polyfill
import './Tile.css';
import getTilePosition from './helpers/getTilePosition';

const propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  previousX: PropTypes.number,
  previousY: PropTypes.number,
  animation: PropTypes.string.isRequired,
  onMerge: PropTypes.func,
};

const defaultProps = {
  previousX: null,
  previousY: null,
  onMerge: () => {},
};

const Tile = class extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const {
      x,
      y,
      previousX,
      previousY,
      animation,
      onMerge,
    } = this.props;

    let keyframes = [];
    switch (animation) {
      case 'add':
        keyframes = [
          { transform: 'scale(0)' },
          { transform: 'scale(1)' },
        ];
        break;
      case 'move':
      case 'mergeStart':
        keyframes = [
          { ...getTilePosition(previousX, previousY) },
          { ...getTilePosition(x, y) },
        ];
        break;
      case 'mergeEnd':
        keyframes = [
          { transform: 'scale(1)' },
          { transform: 'scale(1.2)' },
          { transform: 'scale(1)' },
        ];
        break;
      default:
    }

    // animate() breaks tests, comment out the following block before running
    const animationObj = this.ref.current.animate(keyframes, 100);
    if (animation === 'mergeStart') {
      animationObj.onfinish = onMerge;
    }
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
