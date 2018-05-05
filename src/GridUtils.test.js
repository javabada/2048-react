import addToGrid from './GridUtils';

it('fills an empty cell in the grid', () => {
  const grid = [
    null, null, null, 2048,
    null, null, 2048, null,
    null, 2048, null, null,
    2048, null, null, null,
  ];
  const newGrid = addToGrid(grid);
  expect(newGrid.filter(value => value != null).length).toBe(5);
});
