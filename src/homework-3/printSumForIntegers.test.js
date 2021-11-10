import { printSumForIntegers } from "./printSumForIntegers";

describe('check function "printSumForIntegers"', () => {
  it("print 3825 for result", () => {
    expect(printSumForIntegers(50, 100)).toBe(3825);
  });
});
