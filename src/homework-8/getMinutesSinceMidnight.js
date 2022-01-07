/*
    2. Написать программу, которая выводит в консоль
    количество минут, прошедшее с начала сегодняшнего дня.
*/

export function getMinutesSinceMidnight() {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  console.log(Math.floor((now - midnight) / 1000 / 60));
}
