import { printLengthAndSquare } from "./printLengthAndSquare";

describe("check function printLengthAndSquare", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("should print results for 2", () => {
    jest.spyOn(window, "prompt").mockReturnValue("2");
    printLengthAndSquare();
    expect(console.log).toHaveBeenCalledWith(
      12.566370614359172,
      50.26548245743669
    );
  });

  it("should print results for 4", () => {
    jest.spyOn(window, "prompt").mockReturnValue("4");
    printLengthAndSquare();
    expect(console.log).toHaveBeenCalledWith(
      25.132741228718345,
      201.06192982974676
    );
  });

  it("should print 0, 0  for asd", () => {
    jest.spyOn(window, "prompt").mockReturnValue("asd");
    printLengthAndSquare();
    expect(console.log).toHaveBeenCalledWith(0, 0);
  });
});
