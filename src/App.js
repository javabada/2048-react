import React, { Component } from 'react';
import { initGrid } from './utils';
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
      grid: initGrid(),
    };
  }

  renderCell(i) {
    return (
      <Cell value={this.state.grid[i]} />
    );
  }

  componentDidMount() {
    window.addEventListener('keydown', () => this.handleKeyDown());
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', () => this.handleKeyDown());
  }

  handleKeyDown() {
    console.log('test');
  }

  render() {
    return (
      <div className="grid">
        <div className="grid-row">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
          {this.renderCell(3)}
        </div>
        <div className="grid-row">
          {this.renderCell(4)}
          {this.renderCell(5)}
          {this.renderCell(6)}
          {this.renderCell(7)}
        </div>
        <div className="grid-row">
          {this.renderCell(8)}
          {this.renderCell(9)}
          {this.renderCell(10)}
          {this.renderCell(11)}
        </div>
        <div className="grid-row">
          {this.renderCell(12)}
          {this.renderCell(13)}
          {this.renderCell(14)}
          {this.renderCell(15)}
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
