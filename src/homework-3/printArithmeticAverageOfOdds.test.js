import { printArithmeticAverageOfOdds } from "./printArithmeticAverageOfOdds";

describe('check function "printArithmeticAverageOfOdds"', () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it('print 1 for "0"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("0");
    printArithmeticAverageOfOdds();
    expect(console.log).toHaveBeenCalledWith(1);
  });

  it('print 1 for "1"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("1");
    printArithmeticAverageOfOdds();
    expect(console.log).toHaveBeenCalledWith(1);
  });

  it('print 2 for "4"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("4");
    printArithmeticAverageOfOdds();
    expect(console.log).toHaveBeenCalledWith(2);
  });

  it('print 1 for "abc"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("abc");
    printArithmeticAverageOfOdds();
    expect(console.log).toHaveBeenCalledWith(1);
  });

  it('print 1 for "-42"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("-42");
    printArithmeticAverageOfOdds();
    expect(console.log).toHaveBeenCalledWith(1);
  });
});
