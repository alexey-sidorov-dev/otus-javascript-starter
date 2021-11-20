import { printSumOfAllDigits } from "./printSumOfAllDigits";

describe('check function "printSumOfAllDigits"', () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it('print 6 for "123"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("123");
    printSumOfAllDigits();
    expect(console.log).toHaveBeenCalledWith(6);
  });

  it('print 0 for ""', () => {
    jest.spyOn(window, "prompt").mockReturnValue("");
    printSumOfAllDigits();
    expect(console.log).toHaveBeenCalledWith(0);
  });

  it('print 12 for "4444"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("4444");
    printSumOfAllDigits();
    expect(console.log).toHaveBeenCalledWith(12);
  });

  it('print 6 for "a42"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("123");
    printSumOfAllDigits();
    expect(console.log).toHaveBeenCalledWith(6);
  });

  it('print 0 for "asd"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("asd");
    printSumOfAllDigits();
    expect(console.log).toHaveBeenCalledWith(0);
  });

  it('print 0 for "000"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("000");
    printSumOfAllDigits();
    expect(console.log).toHaveBeenCalledWith(0);
  });
});
