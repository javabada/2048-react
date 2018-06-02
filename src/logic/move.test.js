import { move, LEFT, RIGHT, UP, DOWN } from './move';

describe('move tiles left', () => {
  it('moves a tile to the left side', () => {
    const tiles = [
      { x: 3, y: 0, value: 2 },
    ];
    const expected = [
      {
        x: 0,
        y: 0,
        value: 2,
        previous: [
          { x: 3, y: 0, value: 2 },
        ],
      },
    ];
    const result = move(tiles, LEFT);
    expect(result).toEqual(expected);
  });

  it('moves tiles on different rows all to the left side', () => {
    const tiles = [
      { x: 3, y: 0, value: 2 },
      { x: 1, y: 2, value: 2 },
    ];
    const expected = [
      {
        x: 0,
        y: 0,
        value: 2,
        previous: [
          { x: 3, y: 0, value: 2 },
        ],
      },
      {
        x: 0,
        y: 2,
        value: 2,
        previous: [
          { x: 1, y: 2, value: 2 },
        ],
      },
    ];
    const result = move(tiles, LEFT);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });

  it('stacks up tiles with different values', () => {
    const tiles = [
      { x: 1, y: 0, value: 2 },
      { x: 3, y: 0, value: 4 },
    ];
    const expected = [
      {
        x: 0,
        y: 0,
        value: 2,
        previous: [
          { x: 1, y: 0, value: 2 },
        ],
      },
      {
        x: 1,
        y: 0,
        value: 4,
        previous: [
          { x: 3, y: 0, value: 4 },
        ],
      },
    ];
    const result = move(tiles, LEFT);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });

  it('merges tiles with the same value', () => {
    const tiles = [
      { x: 0, y: 0, value: 2 },
      { x: 2, y: 0, value: 2 },
    ];
    const expected = [
      {
        x: 0,
        y: 0,
        value: 4,
        previous: [
          { x: 0, y: 0, value: 2 },
          { x: 2, y: 0, value: 2 },
        ],
      },
    ];
    const result = move(tiles, LEFT);
    expect(result).toEqual(expected);
  });

  it('merges tiles only once per turn', () => {
    const tiles = [
      { x: 0, y: 0, value: 2 },
      { x: 2, y: 0, value: 2 },
      { x: 3, y: 0, value: 4 },
    ];
    const expected = [
      {
        x: 0,
        y: 0,
        value: 4,
        previous: [
          { x: 0, y: 0, value: 2 },
          { x: 2, y: 0, value: 2 },
        ],
      },
      {
        x: 1,
        y: 0,
        value: 4,
        previous: [
          { x: 3, y: 0, value: 4 },
        ],
      },
    ];
    const result = move(tiles, LEFT);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });
});

describe('move tiles right', () => {
  it('moves tiles right correctly', () => {
    const tiles = [
      { x: 0, y: 0, value: 2 },
      { x: 2, y: 0, value: 2 },
      { x: 1, y: 1, value: 4 },
      { x: 3, y: 1, value: 2 },
    ];
    const expected = [
      {
        x: 3,
        y: 0,
        value: 4,
        previous: [
          { x: 2, y: 0, value: 2 },
          { x: 0, y: 0, value: 2 },
        ],
      },
      {
        x: 3,
        y: 1,
        value: 2,
        previous: [
          { x: 3, y: 1, value: 2 },
        ],
      },
      {
        x: 2,
        y: 1,
        value: 4,
        previous: [
          { x: 1, y: 1, value: 4 },
        ],
      },
    ];
    const result = move(tiles, RIGHT);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });
});

describe('move tiles up', () => {
  it('moves tiles up correctly', () => {
    const tiles = [
      { x: 0, y: 0, value: 2 },
      { x: 1, y: 1, value: 4 },
      { x: 1, y: 2, value: 4 },
      { x: 3, y: 2, value: 2 },
    ];
    const expected = [
      {
        x: 0,
        y: 0,
        value: 2,
        previous: [
          { x: 0, y: 0, value: 2 },
        ],
      },
      {
        x: 1,
        y: 0,
        value: 8,
        previous: [
          { x: 1, y: 1, value: 4 },
          { x: 1, y: 2, value: 4 },
        ],
      },
      {
        x: 3,
        y: 0,
        value: 2,
        previous: [
          { x: 3, y: 2, value: 2 },
        ],
      },
    ];
    const result = move(tiles, UP);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });
});

describe('move tiles down', () => {
  it('moves tiles down correctly', () => {
    const tiles = [
      { x: 1, y: 0, value: 2 },
      { x: 2, y: 0, value: 4 },
      { x: 2, y: 2, value: 2 },
      { x: 2, y: 3, value: 2 },
    ];
    const expected = [
      {
        x: 1,
        y: 3,
        value: 2,
        previous: [
          { x: 1, y: 0, value: 2 },
        ],
      },
      {
        x: 2,
        y: 2,
        value: 4,
        previous: [
          { x: 2, y: 0, value: 4 },
        ],
      },
      {
        x: 2,
        y: 3,
        value: 4,
        previous: [
          { x: 2, y: 3, value: 2 },
          { x: 2, y: 2, value: 2 },
        ],
      },
    ];
    const result = move(tiles, DOWN);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(expected.length);
  });
});
