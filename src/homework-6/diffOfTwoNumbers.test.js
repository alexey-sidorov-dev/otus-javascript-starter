import { diff } from "./diffOfTwoNumbers";

describe("chech function diff(a, b)", () => {
  it("diff(42, 0) should return 42", () => {
    expect(diff(42, 0)).toBe(42);
  });

  it("diff(0, 42) should return 42", () => {
    expect(diff(0, 42)).toBe(42);
  });

  it("diff(-40, 2) should return 40", () => {
    expect(diff(-40, 2)).toBe(42);
  });

  it("diff(-2, 40) should return 40", () => {
    expect(diff(-2, 40)).toBe(42);
  });

  it("diff(-5, -3) should return 2", () => {
    expect(diff(-5, -3)).toBe(2);
  });

  it("diff(42, 'abc') should return 0", () => {
    expect(diff(42, "abc")).toBe(0);
  });

  it("diff('abc', 42) should return 0", () => {
    expect(diff("abc", 42)).toBe(0);
  });
});
