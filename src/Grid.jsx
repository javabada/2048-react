import React from 'react';
import './Grid.css';
import Cell from './Cell';
import { add } from './logic';

const Grid = class extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    let tiles = [];
    tiles = add(tiles);
    tiles = add(tiles);
    this.state = {
      tiles,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown() {
  }

  renderCell(x, y) {
    const cell = this.state.tiles.find(tile => tile.x === x && tile.y === y);
    return <Cell value={cell ? cell.value : null} />;
  }

  render() {
    return (
      <div className="grid">
        <div>
          {this.renderCell(0, 0)}
          {this.renderCell(1, 0)}
          {this.renderCell(2, 0)}
          {this.renderCell(3, 0)}
        </div>
        <div>
          {this.renderCell(0, 1)}
          {this.renderCell(1, 1)}
          {this.renderCell(2, 1)}
          {this.renderCell(3, 1)}
        </div>
        <div>
          {this.renderCell(0, 2)}
          {this.renderCell(1, 2)}
          {this.renderCell(2, 2)}
          {this.renderCell(3, 2)}
        </div>
        <div>
          {this.renderCell(0, 3)}
          {this.renderCell(1, 3)}
          {this.renderCell(2, 3)}
          {this.renderCell(3, 3)}
        </div>
      </div>
    );
  }
};

export default Grid;
