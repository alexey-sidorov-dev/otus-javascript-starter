import { isEmailAddress } from "./isEmailAddress";

describe("check function isEmailAddress", () => {
  it("should return true for mail@mail.ru", () => {
    jest.spyOn(window, "prompt").mockReturnValue("mail@mail.ru");
    expect(isEmailAddress()).toBeTruthy();
  });

  it("should return true for mail.mail@mail.ru", () => {
    jest.spyOn(window, "prompt").mockReturnValue("mail.mail@mail.ru");
    expect(isEmailAddress()).toBeTruthy();
  });

  it("should return false for asd", () => {
    jest.spyOn(window, "prompt").mockReturnValue("asd");
    expect(isEmailAddress()).not.toBeTruthy();
  });
});
