import { printQuadraticRoots } from "./printQuadraticRoots";

describe("check function printLengthAndSquare", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("should print -7, 1 for 1,6,-7", () => {
    jest.spyOn(window, "prompt").mockReturnValue("1,6,-7");
    printQuadraticRoots();
    expect(console.log).toHaveBeenCalledWith(-7, 1);
  });

  it("should print -0.4, 1 for 4", () => {
    jest.spyOn(window, "prompt").mockReturnValue("5,-3,-2");
    printQuadraticRoots();
    expect(console.log).toHaveBeenCalledWith(-0.4, 1);
  });

  it("should print nothing  for asd", () => {
    jest.spyOn(window, "prompt").mockReturnValue("asd");
    printQuadraticRoots();
    expect(console.log).toHaveBeenCalledWith();
  });
});
