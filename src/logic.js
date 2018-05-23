export default function left(tiles) {
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
