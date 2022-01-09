import { createNewArray } from "./createNewArray";

describe("test createNewArray function", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it("print new array [2, 6, 10, 14, 18, 26, 58, 72, 84, 98] from array [1, 3, 5, 7, 9, 13, 29, 36, 42, 49]", () => {
    createNewArray();
    expect(console.log).toHaveBeenCalledWith([
      2, 6, 10, 14, 18, 26, 58, 72, 84, 98,
    ]);
  });
});
