import addTile from './addTile';

const initTiles = () => {
  let tiles = [];
  tiles = addTile(tiles);
  tiles = addTile(tiles);
  return tiles;
};

export default initTiles;
