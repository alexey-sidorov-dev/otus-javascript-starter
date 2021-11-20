import { printMaxNumber } from "./printMaxNumber";

describe('check function "printMaxNumber"', () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("print 3 for 2 and 3", () => {
    printMaxNumber(2, 3);
    expect(console.log).toHaveBeenCalledWith(3);
  });

  it("print 0 for -2 and 0", () => {
    printMaxNumber(-2, 0);
    expect(console.log).toHaveBeenCalledWith(0);
  });

  it("print -2 for -2 and -3", () => {
    printMaxNumber(-2, -3);
    expect(console.log).toHaveBeenCalledWith(-2);
  });

  it("print 0 for 0 and 0", () => {
    printMaxNumber(0, 0);
    expect(console.log).toHaveBeenCalledWith(0);
  });
});
