import { getWeekDay } from "./getWeekDay";

describe("check function getDayOfWeek", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("should print Friday for 07.01.2022", () => {
    jest.spyOn(window, "prompt").mockReturnValue("07.01.2022");
    getWeekDay();
    expect(console.log).toHaveBeenCalledWith("Friday");
  });

  it("should print Sunday for asd", () => {
    jest.spyOn(window, "prompt").mockReturnValue("asd");
    getWeekDay();
    expect(console.log).toHaveBeenCalledWith("Sunday");
  });

  it("should print Thursday for 01.04.2021", () => {
    jest.spyOn(window, "prompt").mockReturnValue("01.04.2021");
    getWeekDay();
    expect(console.log).toHaveBeenCalledWith("Thursday");
  });
});
