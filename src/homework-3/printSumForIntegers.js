export function printSumForIntegers(begin, end) {
  let sum = 0;
  for (let i = begin; i <= end; i++) {
    sum += i;
  }

  return sum;
}
