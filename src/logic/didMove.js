const didMove = tiles => (
  !tiles.every((tile) => {
    const {
      x,
      y,
      value,
      previous,
    } = tile;
    return (
      x === previous[0].x
      && y === previous[0].y
      && value === previous[0].value
    );
  })
);

export default didMove;
