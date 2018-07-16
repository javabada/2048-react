import addTile from './addTile';
import moveTiles from './moveTiles';
import tilesDidMove from './tilesDidMove';

const doMoveTiles = (tiles, direction) => {
  let newTiles = moveTiles(tiles, direction);
  if (tilesDidMove(newTiles)) {
    newTiles = addTile(newTiles);
    return newTiles;
  }
  return tiles;
};

export default doMoveTiles;
