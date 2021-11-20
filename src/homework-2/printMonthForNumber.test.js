import { printMonthForNumber } from "./printMonthForNumber";

describe('check function "printMonthForNumber"', () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it('print "January" for "1"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("1");
    printMonthForNumber();
    expect(console.log).toHaveBeenCalledWith("January");
  });

  it('print "Error" for "42"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("42");
    printMonthForNumber();
    expect(console.log).toHaveBeenCalledWith("Error");
  });

  it('print "December" for "12"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("12");
    printMonthForNumber();
    expect(console.log).toHaveBeenCalledWith("December");
  });

  it('print "Error" for "asd"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("asd");
    printMonthForNumber();
    expect(console.log).toHaveBeenCalledWith("Error");
  });
});
