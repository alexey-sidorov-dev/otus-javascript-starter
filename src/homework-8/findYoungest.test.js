import { fingYoungest } from "./findYoungest";

describe("check function fingYoungest", () => {
  it("should return 01.01.2020 for 01.01.2020 and 01.01.2021", () => {
    expect(fingYoungest("01.01.2020", "01.01.2021")).toBe("01.01.2020");
  });

  it("should return 01.01.2020 for 01.01.2019, 01.01.2020 and 01.01.2021", () => {
    expect(fingYoungest("01.01.2020", "01.01.2019", "01.01.2021")).toBe(
      "01.01.2019"
    );
  });

  it("should return 02.01.2021 for 02.01.2021 and 01.02.2021", () => {
    expect(fingYoungest("01.02.2021", "02.01.2021")).toBe("02.01.2021");
  });
});
