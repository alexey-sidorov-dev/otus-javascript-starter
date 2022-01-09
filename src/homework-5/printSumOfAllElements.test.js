import { printSumOfAllElements } from "./printSumOfAllElements";

describe("check function printSumOfAllElements", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("print 194 for sum of elements from initial array [1, 3, 5, 7, 9, 13, 29, 36, 42, 49]", () => {
    printSumOfAllElements();
    expect(console.log).toHaveBeenCalledWith(194);
  });
});
