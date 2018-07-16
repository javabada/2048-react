import doMoveTiles from './doMoveTiles';

describe('move tiles if possible', () => {
  it('moves and adds a new tile', () => {
    const tiles = [{ x: 3, y: 0, value: 4 }];
    const result = doMoveTiles(tiles, 'LEFT');
    expect(result.length).toBe(2);
  });

  it('does not move nor add a new tile', () => {
    const tiles = [{ x: 0, y: 0, value: 4 }];
    const result = doMoveTiles(tiles, 'LEFT');
    expect(result.length).toBe(1);
  });

  it('returns original tiles if did not move', () => {
    const tiles = [{ x: 0, y: 0, value: 4 }];
    const result = doMoveTiles(tiles, 'LEFT');
    expect(result).toBe(tiles);
  });
});
