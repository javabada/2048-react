import addTile from './addTile';
import moveTiles from './moveTiles';
import tilesDidMove from './tilesDidMove';

// Wrapper for the imported functions. If tiles did move, add a new tile and
// return the new list, if not, return the original list.
const doMoveTiles = (tiles, direction) => {
  const newTiles = moveTiles(tiles, direction);
  if (tilesDidMove(newTiles)) {
    return addTile(newTiles);
  }
  return tiles;
};

export default doMoveTiles;
