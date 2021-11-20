/*
  3*. В переменных circle и square хранятся площади круга
  и квадрата соответственно. Написать программу,
  которая определяет, поместится ли круг в квадрат.
 */

export function isCircleInsideSquare(circle, square) {
  return Math.sqrt(circle / Math.PI) <= Math.sqrt(square);
}
