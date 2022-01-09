import { isPhoneNUmber } from "./isPhoneNumber";

describe("check function isPhoneNUmber", () => {
  it("should return true for +74991234567", () => {
    jest.spyOn(window, "prompt").mockReturnValue("+74991234567");
    expect(isPhoneNUmber()).toBeTruthy();
  });

  it("should return true for 8 495 765 43 21", () => {
    jest.spyOn(window, "prompt").mockReturnValue("+7 495 765 43 21");
    expect(isPhoneNUmber()).toBeTruthy();
  });

  it("should return false for asd", () => {
    jest.spyOn(window, "prompt").mockReturnValue("asd");
    expect(isPhoneNUmber()).not.toBeTruthy();
  });
});
