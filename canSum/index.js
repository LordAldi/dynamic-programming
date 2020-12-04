const canSum = (target, arr) => {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let i of arr) {
    reminder = target - i;
    if (canSum(reminder, arr) === true) return true;
  }
  return false;
};

// console.log(canSum(7, [5, 7, 6, 3]));

const canSumM = (target, arr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let i of arr) {
    reminder = target - i;
    if (canSumM(reminder, arr, memo) === true) {
      memo[target] = true;
      return memo[target];
    }
  }
  memo[target] = false;
  return false;
};

console.log(canSumM(300, [4, 7, 6, 3]));
