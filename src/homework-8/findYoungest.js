/*
  3*. В двух переменных хранятся даты рождения двух
  пользователей в формате ДД.ММ.ГГГГ. Написать
  программу, которая определяет более молодого пользователя.
*/

export function fingYoungest(...args) {
  const argsArr = [...args];
  // Создаём вспомогательную коллекцию, где ключ - объект Date, значение - строка с датой
  const ageMap = new Map();
  argsArr.forEach((ageStr) => {
    ageMap.set(stringToDate(ageStr, "DD.MM.YYYY"), ageStr);
  });

  let youngest;
  // Ищем самый маленький возраст и возвращаем из коллекции строку с датой, которая соответствует этому возрасту
  ageMap.forEach((ageStr, age) => {
    youngest = youngest === undefined || age < youngest ? age : youngest;
  });

  return ageMap.get(youngest);
}

function stringToDate(str, format) {
  const formatObj = { "DD.MM.YYYY": /^(\d{2}).(\d{2}).(\d{4})$/ };
  const match = str.match(formatObj[format.toString().toUpperCase()]);

  return new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]));
}
