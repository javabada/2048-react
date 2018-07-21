import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

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
  previous: [],
};

const TileContainer = class extends React.Component {
  constructor(props) {
    super(props);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    this.state = {
      animationEnd: false,
    };
  }

  onAnimationEnd() {
    this.setState({ animationEnd: true });
  }

  render() {
    const {
      x,
      y,
      value,
      previous,
    } = this.props;
    const { animationEnd } = this.state;

    switch (previous.length) {
      case 0:
        return <Tile animation="add" x={x} y={y} value={value} />;
      case 1:
        return (
          <Tile
            animation="move"
            x={x}
            y={y}
            value={value}
            previousX={previous[0].x}
            previousY={previous[0].y}
          />
        );
      case 2:
        return animationEnd
          ? <Tile animation="mergeEnd" x={x} y={y} value={value} />
          : (
            <React.Fragment>
              <Tile
                animation="mergeStart"
                onAnimationEnd={this.handleAnimationEnd}
                x={x}
                y={y}
                value={previous[0].value}
                previousX={previous[0].x}
                previousY={previous[0].y}
              />
              <Tile
                animation="mergeStart"
                x={x}
                y={y}
                value={previous[1].value}
                previousX={previous[1].x}
                previousY={previous[1].y}
              />
            </React.Fragment>
          );
      default:
        return null;
    }
  }
};

TileContainer.propTypes = propTypes;
TileContainer.defaultProps = defaultProps;

export default TileContainer;
