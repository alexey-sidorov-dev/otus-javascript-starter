import { isTriangleRight } from "./isTriangleRight";

describe("check function isTriangleRight", () => {
  it("returns true for 3, 4, 5", () => {
    expect(isTriangleRight(3, 4, 5)).toBeTruthy();
  });

  it("returns false for 1, 2, 3", () => {
    expect(isTriangleRight(3, 4, 5)).toBeTruthy();
  });

  it("returns false for 0, 2, 2", () => {
    expect(isTriangleRight(3, 4, 5)).toBeTruthy();
  });
});
