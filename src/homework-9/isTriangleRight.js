/*
    1. Даны длины трёх сторон треугольника. Определить,
    является ли треугольник прямоугольным.
*/

export function isTriangleRight(cathetusA, cathetusB, hypotenuseC) {
  // Если хотя бы одно значение равно 0, то это не треугольник, и выводим false, иначе делаем проверку
  return cathetusA !== 0 && cathetusB !== 0 && hypotenuseC !== 0
    ? cathetusA ** 2 + cathetusB ** 2 === hypotenuseC ** 2
    : false;
}
