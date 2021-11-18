import { printTotalLengthOfTwoStrings } from "./printTotalLengthOfTwoStrings";

describe('check function "printTotalLengthOfTwoStrings"', () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it('print 6 for "qwerty" and ""', () => {
    printTotalLengthOfTwoStrings("qwerty", "");
    expect(console.log).toHaveBeenCalledWith(6);
  });

  it('print 9 for "qwerty" and "asd"', () => {
    printTotalLengthOfTwoStrings("qwerty", "asd");
    expect(console.log).toHaveBeenCalledWith(9);
  });

  it('print 0 for "" and ""', () => {
    printTotalLengthOfTwoStrings("", "");
    expect(console.log).toHaveBeenCalledWith(0);
  });
});
