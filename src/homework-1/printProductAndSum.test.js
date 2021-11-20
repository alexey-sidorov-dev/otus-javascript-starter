import { printProductAndSum } from "./printProductAndSum";

describe('check function "printProductAndSum"', () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("print 6 and 5 for 2 and 3", () => {
    printProductAndSum(2, 3);
    expect(console.log).toHaveBeenCalledWith(6, 5);
  });

  it("print 0 and 2 for 0 and 2", () => {
    printProductAndSum(0, 2);
    expect(console.log).toHaveBeenCalledWith(0, 2);
  });

  it("print 42 and 43 for 1 and 42", () => {
    printProductAndSum(1, 42);
    expect(console.log).toHaveBeenCalledWith(42, 43);
  });

  it("print -6 and 1 for -2 and 3", () => {
    printProductAndSum(-2, 3);
    expect(console.log).toHaveBeenCalledWith(-6, 1);
  });

  it("print 9999999800000001 and 199999998 for 99999999 and 99999999", () => {
    printProductAndSum(99999999, 99999999);
    expect(console.log).toHaveBeenCalledWith(9999999800000001, 199999998);
  });
});
