import add from '../logic/add';

const initTiles = () => {
  let tiles = [];
  tiles = add(tiles);
  tiles = add(tiles);
  return tiles;
};

export default initTiles;
