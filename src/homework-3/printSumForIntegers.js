/*
  1. Вывести в консоль сумму всех целых чисел от 50 до
  100.
 */

export function printSumForIntegers(begin, end) {
  let sum = 0;
  for (let i = begin; i <= end; i++) {
    sum += i;
  }

  return sum;
}
