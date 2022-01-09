/*
    1. Пользователь вводит текстовую строку. Определить с
    помощью регулярного выражения, является ли
    введённая строка датой.
*/

export function isDate() {
  const input = prompt("Enter a date:");
  const regexp = /^\d{1,2}\.\d{2}\.\d{2,4}$/;

  return input ? regexp.test(input) : false;
}
