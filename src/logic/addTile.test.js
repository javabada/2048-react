import addTile from './addTile';

describe('add tile', () => {
  it('adds a new tile', () => {
    const tiles = [];
    const result = addTile(tiles);
    expect(result.length).toBe(1);
  });

  it('adds to an empty cell', () => {
    const tiles = [
      { x: 0, y: 0, value: 2 },
      { x: 1, y: 0, value: 2 },
      { x: 2, y: 0, value: 2 },
      { x: 3, y: 0, value: 2 },
      { x: 0, y: 1, value: 2 },
      { x: 2, y: 1, value: 2 },
      { x: 3, y: 1, value: 2 },
      { x: 0, y: 2, value: 2 },
      { x: 1, y: 2, value: 2 },
      { x: 2, y: 2, value: 2 },
      { x: 3, y: 2, value: 2 },
      { x: 0, y: 3, value: 2 },
      { x: 1, y: 3, value: 2 },
      { x: 2, y: 3, value: 2 },
      { x: 3, y: 3, value: 2 },
    ];
    const result = addTile(tiles);
    expect(result.some(tile => tile.x === 1 && tile.y === 1)).toBe(true);
  });
});
