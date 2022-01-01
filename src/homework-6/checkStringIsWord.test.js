import { isWord } from "./checkStringIsWord";

describe("chech function isWord(str)", () => {
  it("isWord() should return true", () => {
    expect(isWord("     one ")).toBe(true);
  });

  it('isWord("one two") should return false', () => {
    expect(isWord("one two")).toBe(false);
  });

  it('isWord("one two three" should return false', () => {
    expect(isWord("one two three")).toBe(false);
  });

  it('isWord("42") should return true', () => {
    expect(isWord("42")).toBe(true);
  });

  it("isWord(42) should return false", () => {
    expect(isWord(42)).toBe(false);
  });

  it("isWord({}) should return false", () => {
    expect(isWord({})).toBe(false);
  });

  it('isWord("one 42") should return false', () => {
    expect(isWord("one 42")).toBe(false);
  });

  it("isWord(null) should return false", () => {
    expect(isWord(42, "abc")).toBe(false);
  });

  it('isWord("") should return false', () => {
    expect(isWord("")).toBe(false);
  });

  it('isWord("       ") should return false', () => {
    expect(isWord("         ")).toBe(false);
  });
});
