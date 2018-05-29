export const add = (tiles) => {
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

export const left = (tiles) => {
  const before = tiles.slice();
  // sort so that tiles are processed in the correct order
  before.sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y));

  const after = [];
  const rowCount = [0, 0, 0, 0];
  before.forEach((tile) => {
    const { x, y, value } = tile;
    const prevTile = after[after.length - 1];
    if (
      prevTile
      && y === prevTile.y
      && value === prevTile.value
      // check if tile has already merged during this turn
      && prevTile.previous.length < 2
    ) {
      prevTile.value *= 2;
      prevTile.previous.push({ x, y, value });
    } else {
      after.push({
        x: rowCount[y],
        y,
        value,
        previous: [{ x, y, value }],
      });
      rowCount[y] += 1;
    }
  });

  return after;
};
