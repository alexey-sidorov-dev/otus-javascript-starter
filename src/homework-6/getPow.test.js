import { pow } from "./getPow";

describe("chech function pow(a, x)", () => {
  it("pow(42, 0) should return 1", () => {
    expect(pow(42, 0)).toBe(1);
  });

  it("pow(0, 42) should return 1", () => {
    expect(pow(0, 42)).toBe(0);
  });

  it("pow(42, 1) should return 42", () => {
    expect(pow(42, 1)).toBe(42);
  });

  it("pow(1, 42) should return 42", () => {
    expect(pow(1, 42)).toBe(1);
  });

  it("pow(5, 3) should return 125", () => {
    expect(pow(5, 3)).toBe(125);
  });

  it("pow(42, 'abc') should return 0", () => {
    expect(pow(42, "abc")).toBe(0);
  });

  it("pow('abc', 42) should return 0", () => {
    expect(pow("abc", 42)).toBe(0);
  });
});
