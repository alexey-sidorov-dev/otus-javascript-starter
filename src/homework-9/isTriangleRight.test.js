import { isTriangleRight } from "./isTriangleRight";

describe("check function isTriangleRight", () => {
  it("returns true for 3, 4, 5", () => {
    expect(isTriangleRight(3, 4, 5)).toBeTruthy();
  });

  it("returns true for 5, 4, 3", () => {
    expect(isTriangleRight(5, 4, 3)).toBeTruthy();
  });

  it("returns false for 0, 2, 2", () => {
    expect(isTriangleRight(0, 2, 2)).not.toBeTruthy();
  });

  it("returns false for 1, 2, 2", () => {
    expect(isTriangleRight(1, 2, 2)).not.toBeTruthy();
  });
});
