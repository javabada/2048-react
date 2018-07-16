// Compares the "moved" tiles with their previous state to check if tiles have
// moved
const tilesDidMove = tiles => (
  tiles.some(tile => (
    tile.x !== tile.previous[0].x
    || tile.y !== tile.previous[0].y
    || tile.value !== tile.previous[0].value
  ))
);

export default tilesDidMove;
