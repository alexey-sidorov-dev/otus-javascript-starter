import { addUserAndAdmin } from "./addUserAndAdmin";

describe("check function addUserAndAdmin", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  it('print "John 5 admin" for provided number "5"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("5");
    addUserAndAdmin();
    expect(console.log).toHaveBeenCalledWith("John", 5, "admin");
  });

  it('print "John 0 admin" for provided number "a"', () => {
    jest.spyOn(window, "prompt").mockReturnValue("a");
    addUserAndAdmin();
    expect(console.log).toHaveBeenCalledWith("John", 0, "admin");
  });
});
