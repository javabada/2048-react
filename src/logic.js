const add = (tiles) => {
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
};

const LEFT = 'LEFT';
const RIGHT = 'RIGHT';
const UP = 'UP';
const DOWN = 'DOWN';

const reduce = (tiles, vertical, reverse) => {
  const mainAxis = vertical ? 'y' : 'x';
  const crossAxis = vertical ? 'x' : 'y';

  const reduced = [];
  tiles.forEach((tile) => {
    const { x, y, value } = tile;
    const prevTile = reduced[reduced.length - 1];
    if (prevTile && prevTile.value === value && prevTile.previous.length < 2) {
      prevTile.value *= 2;
      prevTile.previous.push({ x, y, value });
    } else {
      reduced.push({
        [mainAxis]: reverse ? 3 - reduced.length : reduced.length,
        [crossAxis]: vertical ? x : y,
        value,
        previous: [{ x, y, value }],
      });
    }
  });
  return reduced;
};

const move = (tiles, direction) => {
  const vertical = direction === UP || direction === DOWN;
  const reverse = direction === RIGHT || direction === DOWN;
  const mainAxis = vertical ? 'y' : 'x';
  const crossAxis = vertical ? 'x' : 'y';

  // group tiles by row/column
  const vectors = [];
  for (let i = 0; i < 4; i += 1) {
    const vector = tiles.filter(tile => tile[crossAxis] === i);
    if (vector.length > 0) {
      vectors.push(vector);
    }
  }

  const after = [];
  vectors.forEach((vector) => {
    const copy = vector.slice();
    // sort tiles so they are reduced in the right order
    copy.sort((a, b) => (
      reverse ? b[mainAxis] - a[mainAxis] : a[mainAxis] - b[mainAxis]
    ));
    const reduced = reduce(copy, vertical, reverse);
    reduced.forEach(tile => after.push(tile));
  });
  return after;
};

export { add, move, LEFT, RIGHT, UP, DOWN };
