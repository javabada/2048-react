function addCell(grid) {
  const emptyCells = [];
  for (let i = 0; i < 16; i++) {
    if (!grid[i]) {
      emptyCells.push(i);
    }
  }
  const randCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  const newGrid = grid.slice();
  newGrid[randCell] = Math.random() < .9 ? 2 : 4;
  return newGrid;
}

export function initGrid() {
  let grid = Array(16).fill(null);
  grid = addCell(grid);
  grid = addCell(grid);
  return grid;
}
