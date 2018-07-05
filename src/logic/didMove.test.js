import move from './move';
import didMove from './didMove';

describe('didMove', () => {
  it('returns true', () => {
    const tiles = [
      { x: 0, y: 2, value: 4 },
      { x: 2, y: 2, value: 2 },
    ];
    const result = move(tiles, 'LEFT');
    expect(didMove(result)).toBe(true);
  });

  it('returns false', () => {
    const tiles = [
      { x: 0, y: 3, value: 2 },
      { x: 1, y: 3, value: 4 },
    ];
    const result = move(tiles, 'LEFT');
    expect(didMove(result)).toBe(false);
  });
});
