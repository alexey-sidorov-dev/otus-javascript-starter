import { printMultiplicationTable } from "./printMultiplicationTable";

describe('test function "printMultiplicationTable"', () => {
  const oldConsoleLog = console.log;

  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = oldConsoleLog;
  });

  it("print multiplication table for 7", () => {
    printMultiplicationTable(7);
    expect(console.log.mock.calls).toEqual([
      ["7 x 1 = 7"],
      ["7 x 2 = 14"],
      ["7 x 3 = 21"],
      ["7 x 4 = 28"],
      ["7 x 5 = 35"],
      ["7 x 6 = 42"],
      ["7 x 7 = 49"],
      ["7 x 8 = 56"],
      ["7 x 9 = 63"],
    ]);
  });
});
