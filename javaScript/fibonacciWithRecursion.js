const value = 11;

const findFibonacci = (value) => {
  if (value === 1) {
    return 1;
  } else if (value === 0) {
    return 0;
  } else {
    return findFibonacci(value - 1) + findFibonacci(value - 2);
  }
};

const result = findFibonacci(value);
console.log(result);
