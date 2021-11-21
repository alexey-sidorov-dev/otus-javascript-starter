/*
  3*. Запросить у пользователя ввод числа N. Вывести в
  консоль среднее арифметическое всех нечётных
  чисел от 1 до N .
 */

export function printArithmeticAverageOfOdds() {
  const providedNumberString = prompt("Enter a number:");
  console.log(getArithmeticAverageFromOfAllOdds(Number(providedNumberString)));
}

function getArithmeticAverageFromOfAllOdds(number) {
  if (Number.isNaN(number) || number <= 1) {
    return 1;
  }

  let sum = 0;
  let count = 0;

  for (let index = 1; index <= number; index++) {
    sum = index % 2 === 1 ? sum + index : sum;
    count = index % 2 === 1 ? count + 1 : count;
  }

  return sum / count;
}
