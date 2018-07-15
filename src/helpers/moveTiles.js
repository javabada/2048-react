import add from '../logic/add';
import move from '../logic/move';
import didMove from '../logic/didMove';

const moveTiles = (tiles, direction) => {
  let newTiles = move(tiles, direction);
  if (didMove(newTiles)) {
    newTiles = add(newTiles);
    return newTiles;
  }
  return tiles;
};

export default moveTiles;
