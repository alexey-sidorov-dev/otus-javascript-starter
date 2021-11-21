/*
    Создайте массив целых чисел из 10 элементов.
    3*. Найдите и выведите в консоль наибольший и
    наименьший элементы исходного массива.
 */

export function printMaxAndMinElements() {
  const initialArr = [1, 3, 5, 7, 9, 13, 29, 36, 42, 49];

  console.log(Math.max(...initialArr), Math.min(...initialArr));
}
