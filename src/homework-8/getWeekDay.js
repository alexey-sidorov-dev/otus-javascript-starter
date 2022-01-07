/*
  1. Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
  Напишите программу, выводящую день  недели по введённой дате.
*/

export function getWeekDay() {
  const input = prompt("Enter a date (DD.MM.YYYY):");
  const weekDayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesfday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Пользователь ввёл дату в нужном формате, иначе день недели по умолчанию - 0
  let weekDayNumber = 0;
  if (input && /^\d{2}.\d{2}.\d{4}$/.test(input)) {
    const match = input.match(/^(\d{2}).(\d{2}).(\d{4})$/);
    weekDayNumber = new Date(
      Number(match[3]),
      Number(match[2]) - 1,
      Number(match[1])
    ).getDay();
  }

  console.log(weekDayArr[weekDayNumber]);
}
