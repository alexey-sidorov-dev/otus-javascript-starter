import { printMaxAndMinElements } from "./printMaxAndMinElements";

describe("test function printMinAndMaxElements", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("print 49, 1 for max and min elements", () => {
    printMaxAndMinElements();
    expect(console.log).toHaveBeenCalledWith(49, 1);
  });
});
