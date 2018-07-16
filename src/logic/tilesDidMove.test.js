import moveTiles from './moveTiles';
import tilesDidMove from './tilesDidMove';

describe('check if tiles did move', () => {
  it('returns true', () => {
    const tiles = [
      { x: 0, y: 2, value: 4 },
      { x: 2, y: 2, value: 2 },
    ];
    const result = moveTiles(tiles, 'LEFT');
    expect(tilesDidMove(result)).toBe(true);
  });

  it('returns false', () => {
    const tiles = [
      { x: 0, y: 3, value: 2 },
      { x: 1, y: 3, value: 4 },
    ];
    const result = moveTiles(tiles, 'LEFT');
    expect(tilesDidMove(result)).toBe(false);
  });
});
