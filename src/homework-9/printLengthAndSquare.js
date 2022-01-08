/*
    2. Пользователь вводит число R. Написать программу,
    которая выведет в консоль длину окружности и
    площадь круга с радиусом R.
*/

export function printLengthAndSquare() {
  const R = Number(prompt("Enter a number R:"));
  // Проверяем, что пользователь ввёл число
  if (R && !Number.isNaN(R)) {
    console.log(2 * Math.PI * R, 4 * Math.PI * R ** 2);
  } else {
    console.log(0, 0);
  }
}
