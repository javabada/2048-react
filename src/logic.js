export function add(tiles) {
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
}

export function left(tiles) {
  // sort array so that tiles are read in the right order
  tiles.sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y));

  const after = [];
  const rowCount = [0, 0, 0, 0];
  tiles.forEach((tile, index) => {
    const nextTile = tiles[index + 1];
    if (
      nextTile
      && tile.y === nextTile.y
      && tile.value === nextTile.value
      && !tile.merged
    ) {
      // avoid pushing the current tile and modify the next tile
      nextTile.value *= 2;
      nextTile.merged = true;
    } else {
      after.push({ x: rowCount[tile.y], y: tile.y, value: tile.value });
      rowCount[tile.y] += 1;
    }
  });

  return after;
}
