import { add, left } from './logic';

describe('add tile', () => {
  it('adds a new tile to the grid', () => {
    const tiles = [];
    const result = add(tiles);
    expect(result.length).toBe(1);
  });

  it('adds the new tile to an empty cell', () => {
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
    const result = add(tiles);
    expect(result.some(tile => tile.x === 1 && tile.y === 1)).toBe(true);
  });
});

describe('move left', () => {
  it('moves a tile to the edge', () => {
    const tiles = [
      { x: 3, y: 0, value: 2 },
    ];
    const expected = [
      { x: 0, y: 0, value: 2 },
    ];
    const result = left(tiles);
    expect(result).toEqual(expected);
  });

  it('moves multiple tiles to the edge', () => {
    const tiles = [
      { x: 3, y: 0, value: 2 },
      { x: 2, y: 1, value: 2 },
      { x: 1, y: 2, value: 2 },
    ];
    const expected = [
      { x: 0, y: 0, value: 2 },
      { x: 0, y: 1, value: 2 },
      { x: 0, y: 2, value: 2 },
    ];
    const result = left(tiles);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });

  it('stacks up tiles with different values', () => {
    const tiles = [
      { x: 1, y: 0, value: 2 },
      { x: 3, y: 0, value: 4 },
    ];
    const expected = [
      { x: 0, y: 0, value: 2 },
      { x: 1, y: 0, value: 4 },
    ];
    const result = left(tiles);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });

  it('merges tiles with the same value', () => {
    const tiles = [
      { x: 0, y: 0, value: 2 },
      { x: 2, y: 0, value: 2 },
    ];
    const expected = [
      { x: 0, y: 0, value: 4 },
    ];
    const result = left(tiles);
    expect(result).toEqual(expected);
  });

  it('merges tiles only once per turn', () => {
    const tiles = [
      { x: 0, y: 0, value: 2 },
      { x: 2, y: 0, value: 2 },
      { x: 3, y: 0, value: 4 },
    ];
    const expected = [
      { x: 0, y: 0, value: 4 },
      { x: 1, y: 0, value: 4 },
    ];
    const result = left(tiles);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });

  it('handles a row with the same valued tiles correctly', () => {
    const tiles = [
      { x: 0, y: 0, value: 2 },
      { x: 1, y: 0, value: 2 },
      { x: 2, y: 0, value: 2 },
      { x: 3, y: 0, value: 2 },
    ];
    const expected = [
      { x: 0, y: 0, value: 4 },
      { x: 1, y: 0, value: 4 },
    ];
    const result = left(tiles);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });

  it('handles multiple rows correctly', () => {
    const tiles = [
      { x: 0, y: 0, value: 4 },
      { x: 1, y: 0, value: 4 },
      { x: 2, y: 0, value: 2 },
      { x: 3, y: 0, value: 2 },
      { x: 0, y: 1, value: 4 },
      { x: 1, y: 1, value: 2 },
      { x: 2, y: 1, value: 8 },
      { x: 3, y: 1, value: 2 },
      { x: 1, y: 2, value: 2 },
      { x: 2, y: 2, value: 4 },
      { x: 3, y: 2, value: 4 },
      { x: 2, y: 3, value: 4 },
      { x: 3, y: 3, value: 4 },
    ];
    const expected = [
      { x: 0, y: 0, value: 8 },
      { x: 1, y: 0, value: 4 },
      { x: 0, y: 1, value: 4 },
      { x: 1, y: 1, value: 2 },
      { x: 2, y: 1, value: 8 },
      { x: 3, y: 1, value: 2 },
      { x: 0, y: 2, value: 2 },
      { x: 1, y: 2, value: 8 },
      { x: 0, y: 3, value: 8 },
    ];
    const result = left(tiles);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });
});
