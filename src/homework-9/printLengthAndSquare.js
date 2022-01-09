/*
    2. Пользователь вводит число R. Написать программу,
    которая выведет в консоль длину окружности и
    площадь круга с радиусом R.
*/

export function printLengthAndSquare() {
  const radius = prompt("Enter a radius:");

  console.log(calculateLength(radius), calculateSquare(radius));
}

export function calculateLength(input) {
  const radius = +input;
  if (radius && !Number.isNaN(radius) && radius > 0) {
    return 2 * Math.PI * radius;
  }

  throw new Error("Radius must be positive number!");
}

export function calculateSquare(input) {
  const radius = +input;
  if (radius && !Number.isNaN(radius) && radius > 0) {
    return 4 * Math.PI * radius ** 2;
  }

  throw new Error("Radius must be positive number!");
}
