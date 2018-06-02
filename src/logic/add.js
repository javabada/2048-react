const add = (tiles) => {
  const emptyCells = [];
  for (let x = 0; x < 4; x += 1) {
    for (let y = 0; y < 4; y += 1) {
      if (!tiles.some(tile => tile.x === x && tile.y === y)) {
        emptyCells.push({ x, y });
      }
    }
  }
  const cell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  const value = Math.random() > 0.9 ? 4 : 2;
  const after = tiles.slice();
  after.push({ ...cell, value });
  return after;
};

export default add;
