/*
    1.Напишите функцию diff, которая получает в качестве
    параметров 2 числа и возвращает разницу между
    наибольшим и наименьшим.
 */

export function diff(a, b) {
  // Если в функцию передан хотя бы один аргумент, не являющийся числом, то возвращаем 0
  return !Number.isNaN(Number(a)) && !Number.isNaN(Number(b))
    ? Math.abs(a - b)
    : 0;
}
