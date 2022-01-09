/*
    2. Пользователь вводит текстовую строку. Определить с
    помощью регулярного выражения, является ли
    введённая строка адресом электронной почты.
*/

export function isEmailAddress() {
  const input = prompt("Enter an email address:");
  const regexp = /^[\da-z.]+@[\da-z]+\.[a-z]+$/;

  return input ? regexp.test(input) : false;
}
