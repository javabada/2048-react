import didMove from './didMove';
import { move, LEFT } from './move';

describe('check if tiles have moved', () => {
  it('did move', () => {
    const tiles = [
      { x: 0, y: 2, value: 4 },
      { x: 2, y: 2, value: 2 },
    ];
    const result = move(tiles, LEFT);
    expect(didMove(result)).toBe(true);
  });

  it('did not move', () => {
    const tiles = [
      { x: 0, y: 3, value: 2 },
      { x: 1, y: 3, value: 4 },
    ];
    const result = move(tiles, LEFT);
    expect(didMove(result)).toBe(false);
  });
});
