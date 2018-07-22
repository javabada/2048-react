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
    this.handleShowMerged = this.handleShowMerged.bind(this);
    this.state = {
      showMerged: false,
    };
  }

  handleShowMerged() {
    this.setState({ showMerged: true });
  }

  render() {
    const {
      x,
      y,
      value,
      previous,
    } = this.props;
    const { showMerged } = this.state;

    switch (previous.length) {
      case 0:
        return <Tile x={x} y={y} value={value} animation="add" />;
      case 1:
        return (
          <Tile
            x={x}
            y={y}
            value={value}
            previousX={previous[0].x}
            previousY={previous[0].y}
            animation="move"
          />
        );
      case 2:
        return showMerged
          ? <Tile x={x} y={y} value={value} animation="mergeEnd" />
          : (
            <React.Fragment>
              <Tile
                x={x}
                y={y}
                value={previous[0].value}
                previousX={previous[0].x}
                previousY={previous[0].y}
                animation="mergeStart"
                onMerge={this.handleShowMerged}
              />
              <Tile
                x={x}
                y={y}
                value={previous[1].value}
                previousX={previous[1].x}
                previousY={previous[1].y}
                animation="mergeStart"
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
