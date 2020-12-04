const trevGrid = (x, y) => {
  if (x == 0 || y == 0) return 0;
  if (x == 1 && y == 1) return 1;
  return trevGrid(x - 1, y) + trevGrid(x, y - 1);
};

//memoization
const trevGridM = (x, y, memo = {}) => {
  const key = `${x},${y}`;
  if (key in memo) return memo[key];
  if (x == 0 || y == 0) return 0;
  if (x == 1 && y == 1) return 1;
  memo[key] = trevGridM(x - 1, y, memo) + trevGridM(x, y - 1, memo);
  return memo[key];
};
console.log(trevGridM(100, 100));
