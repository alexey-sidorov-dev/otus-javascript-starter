import { getMinutesSinceMidnight } from "./getMinutesSinceMidnight";

describe("check function getMinutesSinceMidnight", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("should print 0 for midnight", () => {
    // jest.useFakeTimers().setSystemTime(new Date(2022, 0, 7));
    jest.useFakeTimers().setSystemTime(new Date("2022-01-07T00:00"));
    getMinutesSinceMidnight();
    expect(console.log).toHaveBeenCalledWith(0);
  });

  it("should print 60 for 01:00:00", () => {
    jest.useFakeTimers().setSystemTime(new Date("2022-01-07T01:00"));
    getMinutesSinceMidnight();
    expect(console.log).toHaveBeenCalledWith(60);
  });

  it("should return 1 for 00:01:00", () => {
    jest.useFakeTimers().setSystemTime(new Date("2022-01-07T00:01"));
    getMinutesSinceMidnight();
    expect(console.log).toHaveBeenCalledWith(1);
  });
});
