import { isDate } from "./isDate";

describe("check function isDate", () => {
  it("should return true  for 01.01.2021", () => {
    jest.spyOn(window, "prompt").mockReturnValue("01.01.2021");
    expect(isDate()).toBeTruthy();
  });

  it("should print true for 01.01.21", () => {
    jest.spyOn(window, "prompt").mockReturnValue("01.01.21");
    expect(isDate()).toBeTruthy();
  });

  it("should print 0, 0  for asd", () => {
    jest.spyOn(window, "prompt").mockReturnValue("asd");
    expect(isDate()).not.toBeTruthy();
  });
});
