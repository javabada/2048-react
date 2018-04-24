import React, { Component } from 'react';
import './App.css';

function Cell(props) {
  return (
    <div className="cell">
      {props.value}
    </div>
  );
}

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(4).fill(Array(4).fill(0)),
    };
  }

  renderCell(x, y) {
    return (
      <Cell value={this.state.grid[x][y]} />
    );
  }

  render() {
    return (
      <div className="grid">
        <div className="grid-row">
          {this.renderCell(0, 0)}
          {this.renderCell(0, 1)}
          {this.renderCell(0, 2)}
          {this.renderCell(0, 3)}
        </div>
        <div className="grid-row">
          {this.renderCell(1, 0)}
          {this.renderCell(1, 1)}
          {this.renderCell(1, 2)}
          {this.renderCell(1, 3)}
        </div>
        <div className="grid-row">
          {this.renderCell(2, 0)}
          {this.renderCell(2, 1)}
          {this.renderCell(2, 2)}
          {this.renderCell(2, 3)}
        </div>
        <div className="grid-row">
          {this.renderCell(3, 0)}
          {this.renderCell(3, 1)}
          {this.renderCell(3, 2)}
          {this.renderCell(3, 3)}
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Grid />
      </div>
    );
  }
}

export default App;
