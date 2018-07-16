import addTile from './addTile';

// Game starts with 2 tiles.
const initTiles = () => {
  let tiles = [];
  tiles = addTile(tiles);
  tiles = addTile(tiles);
  return tiles;
};

export default initTiles;
