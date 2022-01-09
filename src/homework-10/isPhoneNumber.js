/*
    3*. Пользователь вводит текстовую строку. Определить с
    помощью регулярного выражения, является ли
    введённая строка номером телефона.
*/

export function isPhoneNUmber() {
  const input = prompt("Enter a phone number:");
  const regexp =
    /^\+\d[\s(-]{0,1}\d{3}[\s)-]{0,1}\d{3}[\s-]{0,1}\d{2}[\s-]{0,1}\d{2}$/;

  return input ? regexp.test(input) : false;
}
