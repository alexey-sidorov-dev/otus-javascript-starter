export function printMonthForNumber() {
  const providedNumberString = prompt("Enter a number from 1 to 12:");
  console.log(getMonthByNumber(Number(providedNumberString)));
}

function getMonthByNumber(number) {
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return !Number.isNaN(number) && number >= 1 && number <= 12
    ? monthArr[number - 1]
    : "Error";
}
