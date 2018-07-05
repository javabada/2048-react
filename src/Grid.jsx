import React from 'react';
import './Grid.css';
import Cell from './Cell';
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
    const movement = {
      x: e.changedTouches[0].clientX - this.state.touchStartPos.x,
      y: e.changedTouches[0].clientY - this.state.touchStartPos.y,
    };
    this.setState({ touchStartPos: null });
    let direction;
    if (Math.abs(movement.x) > Math.abs(movement.y)) {
      direction = movement.x > 0 ? 'RIGHT' : 'LEFT';
    } else if (Math.abs(movement.y) > Math.abs(movement.x)) {
      direction = movement.y > 0 ? 'DOWN' : 'UP';
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

  renderCell(x, y) {
    const cell = this.state.tiles.find(tile => tile.x === x && tile.y === y);
    return <Cell value={cell ? cell.value : null} />;
  }

  render() {
    return (
      <div ref={this.ref} className="grid">
        {this.renderCell(0, 0)}
        {this.renderCell(1, 0)}
        {this.renderCell(2, 0)}
        {this.renderCell(3, 0)}
        {this.renderCell(0, 1)}
        {this.renderCell(1, 1)}
        {this.renderCell(2, 1)}
        {this.renderCell(3, 1)}
        {this.renderCell(0, 2)}
        {this.renderCell(1, 2)}
        {this.renderCell(2, 2)}
        {this.renderCell(3, 2)}
        {this.renderCell(0, 3)}
        {this.renderCell(1, 3)}
        {this.renderCell(2, 3)}
        {this.renderCell(3, 3)}
      </div>
    );
  }
};

export default Grid;
