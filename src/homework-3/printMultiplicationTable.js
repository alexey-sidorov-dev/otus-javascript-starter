export function printMultiplicationTable(number) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
