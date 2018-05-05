export default function addToGrid(grid) {
  const emptyCells = [];
  for (let i = 0; i < 16; i += 1) {
    if (!grid[i]) {
      emptyCells.push(i);
    }
  }
  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  const newGrid = grid.slice();
  newGrid[randomCell] = Math.random() < 0.9 ? 2 : 4;
  return newGrid;
}
