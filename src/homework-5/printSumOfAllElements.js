/*
    Создайте массив целых чисел из 10 элементов.
    1. Выведите в консоль сумму всех элементов массива.
 */

export function printSumOfAllElements() {
  const arr = [1, 3, 5, 7, 9, 13, 29, 36, 42, 49];
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });

  console.log(sum);
}
