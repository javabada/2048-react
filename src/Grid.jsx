import React from 'react';
import './Grid.css';
import Tile from './Tile';
import add from './logic/add';
import move from './logic/move';
import didMove from './logic/didMove';

const Grid = class extends React.Component {
  constructor(props) {
    super(props);
    /**
     * Create a ref to grid to add native touch event listeners. This is needed
     * as Event.preventDefault() does not work with React's SyntheticEvent for
     * touch events. Further information on why can be found here:
     * https://developers.google.com/web/updates/2017/01/scrolling-intervention
     */
    this.ref = React.createRef();
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    let tiles = [];
    tiles = add(tiles);
    tiles = add(tiles);
    this.state = {
      tiles,
      touchStartPos: null,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    this.ref.current.addEventListener('touchstart', this.handleTouchStart);
    this.ref.current.addEventListener('touchend', this.handleTouchEnd);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    this.ref.current.removeEventListener('touchstart', this.handleTouchStart);
    this.ref.current.removeEventListener('touchend', this.handleTouchEnd);
  }

  handleKeyDown(e) {
    switch (e.key) {
      case 'ArrowLeft':
      case 'a':
      case 'h':
        this.moveTiles('LEFT');
        break;
      case 'ArrowRight':
      case 'd':
      case 'l':
        this.moveTiles('RIGHT');
        break;
      case 'ArrowUp':
      case 'w':
      case 'k':
        this.moveTiles('UP');
        break;
      case 'ArrowDown':
      case 's':
      case 'j':
        this.moveTiles('DOWN');
        break;
      default:
    }
  }

  handleTouchStart(e) {
    e.preventDefault();
    this.setState({
      touchStartPos: { x: e.touches[0].clientX, y: e.touches[0].clientY },
    });
  }

  handleTouchEnd(e) {
    const { touchStartPos } = this.state;
    const movement = {
      dx: e.changedTouches[0].clientX - touchStartPos.x,
      dy: e.changedTouches[0].clientY - touchStartPos.y,
    };
    this.setState({ touchStartPos: null });
    let direction;
    if (Math.abs(movement.dx) > Math.abs(movement.dy)) {
      direction = movement.dx > 0 ? 'RIGHT' : 'LEFT';
    } else if (Math.abs(movement.dy) > Math.abs(movement.dx)) {
      direction = movement.dy > 0 ? 'DOWN' : 'UP';
    }
    if (direction) {
      this.moveTiles(direction);
    }
  }

  moveTiles(direction) {
    let { tiles } = this.state;
    tiles = move(tiles, direction);
    if (didMove(tiles)) {
      tiles = add(tiles);
    }
    this.setState({ tiles });
  }

  render() {
    const { tiles } = this.state;
    return (
      <div ref={this.ref} className="grid">
        {[...Array(16).keys()].map(cell => (
          <div key={cell} className="cell" />
        ))}
        {tiles.map(tile => (
          <Tile
            key={`${tile.x}${tile.y}`}
            x={tile.x}
            y={tile.y}
            value={tile.value}
          />
        ))}
      </div>
    );
  }
};

export default Grid;
