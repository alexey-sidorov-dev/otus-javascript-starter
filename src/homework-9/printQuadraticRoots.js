/*
    3*. Пользователь вводит числа a, b и c. Написать
    программу, выводящую корни квадратного
    уравнения с коэффициентами a, b и c.
*/

export function printQuadraticRoots() {
  const input = prompt("Enter 3 comma-separated numbers:");
  const digits = [];
  // Пользователь ввёл непустую строку
  if (input && input.trim()) {
    // Приводим ввод к массиву, разрезая по запятым
    input.split(",").forEach((item) => {
      // Eсли элемент является числом, то добавляем в массив с числами
      if (item && item.trim() && !Number.isNaN(Number(item))) {
        digits.push(Number(item));
      }
    });
  }

  console.log(...calculateQuadraticRoots(digits[0], digits[1], digits[2]));
}

function calculateQuadraticRoots(a, b, c) {
  // Если хотя бы одно из чисел не задано, возвращаем пустой массив
  if (a === undefined || b === undefined || c === undefined) {
    return [];
  }

  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    const x1 = -(b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = -(b - Math.sqrt(discriminant)) / (2 * a);
    // Сортируем массив по возрастанию
    return [x1, x2].sort((m, n) => m - n);
  }

  if (discriminant === 0) {
    const x = -b / (2 * a);
    return [x];
  }

  return [];
}
