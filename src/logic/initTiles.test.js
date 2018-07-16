import initTiles from './initTiles';

describe('init tiles', () => {
  it('starts game with 2 tiles', () => {
    const tiles = initTiles();
    expect(tiles.length).toBe(2);
  });
});
