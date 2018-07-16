// Move tiles in the given direction.
const moveTiles = (tiles, direction) => {
  // main axis is the one tiles are moving along
  const mainAxis = direction === 'UP' || direction === 'DOWN' ? 'y' : 'x';
  const crossAxis = mainAxis === 'x' ? 'y' : 'x';
  // reverse is when tiles are moving towards cells with greater indices
  const isReverse = direction === 'RIGHT' || direction === 'DOWN';

  const moveRow = (row) => {
    const movedRow = [];
    row.forEach((tile) => {
      const previousTile = movedRow[movedRow.length - 1];
      if (
        previousTile
        && previousTile.value === tile.value
        && previousTile.previous.length < 2 // is not a merged tile
      ) {
        previousTile.value *= 2;
        previousTile.previous.push({ ...tile });
      } else {
        movedRow.push({
          [mainAxis]: isReverse ? 3 - movedRow.length : movedRow.length,
          [crossAxis]: tile[crossAxis],
          value: tile.value,
          previous: [{ ...tile }],
        });
      }
    });
    return movedRow;
  };

  // separate tiles into rows and sort so they are moved in the right order
  const rows = [];
  for (let i = 0; i < 4; i += 1) {
    const row = tiles.filter(tile => tile[crossAxis] === i);
    if (row.length > 0) {
      row.sort((a, b) => (
        isReverse ? b[mainAxis] - a[mainAxis] : a[mainAxis] - b[mainAxis]
      ));
      rows.push(row);
    }
  }

  const movedTiles = [];
  rows.forEach((row) => {
    const movedRow = moveRow(row);
    movedRow.forEach(tile => movedTiles.push(tile));
  });
  return movedTiles;
};

export default moveTiles;
