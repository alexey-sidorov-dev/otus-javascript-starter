import { isCircleInsideSquare } from "./isCircleInsideSquare";

describe('check function "isCircleInsideSquare"', () => {
  it("true for 314 and 100", () => {
    expect(isCircleInsideSquare(314, 100)).toBe(true);
  });
  it("false for 4242 and 100", () => {
    expect(isCircleInsideSquare(4242, 100)).toBe(false);
  });
  it("true for 100 and 100", () => {
    expect(isCircleInsideSquare(100, 100)).toBe(true);
  });
  it("true for 100 and 999999999", () => {
    expect(isCircleInsideSquare(314, 100)).toBe(true);
  });
});
