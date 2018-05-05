import React from 'react';
import './Grid.css';
import Cell from './Cell';
import addToGrid from './GridUtils';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    // Game starts with 2 cells filled.
    let grid = Array(16).fill(null);
    grid = addToGrid(grid);
    grid = addToGrid(grid);
    this.state = {
      grid,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', () => this.handleKeyDown());
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', () => this.handleKeyDown());
  }

  handleKeyDown() {
  }

  renderCell(i) {
    return <Cell value={this.state.grid[i]} />;
  }

  render() {
    return (
      <div className="grid">
        <div>
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
          {this.renderCell(3)}
        </div>
        <div>
          {this.renderCell(4)}
          {this.renderCell(5)}
          {this.renderCell(6)}
          {this.renderCell(7)}
        </div>
        <div>
          {this.renderCell(8)}
          {this.renderCell(9)}
          {this.renderCell(10)}
          {this.renderCell(11)}
        </div>
        <div>
          {this.renderCell(12)}
          {this.renderCell(13)}
          {this.renderCell(14)}
          {this.renderCell(15)}
        </div>
      </div>
    );
  }
}
