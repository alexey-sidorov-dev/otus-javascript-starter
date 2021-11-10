export function printSumOfAllDigits() {
  const providedNumberString = prompt("Enter a three digits number:");
  const sumOfAllDigits = providedNumberString
    ? getSumOfNumbersInArray(providedNumberString.slice(0, 3).split(""))
    : 0;
  console.log(sumOfAllDigits);
}

function getSumOfNumbersInArray(arr) {
  let sum = 0;
  let inc = 0;
  arr.forEach((item) => {
    const number = Number(item);
    inc = !Number.isNaN(number) ? number : 0;
    sum += inc;
  });

  return sum;
}
