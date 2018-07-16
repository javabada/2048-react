// position: grid padding + cells + grid gaps
const getTilePosition = (x, y) => ({
  left: `${1 + 6 * x + x}rem`,
  top: `${1 + 6 * y + y}rem`,
});

export default getTilePosition;
