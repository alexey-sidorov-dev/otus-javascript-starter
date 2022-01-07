import { createPage } from "./createPage";

describe("check function createPage", () => {
  let input;
  let button;
  let paragraphsCollection;

  beforeEach(() => {
    const container = document.createElement("div");
    container.id = "app";
    document.body.append(container);
    createPage(container);

    input = document.querySelector("input#input-paragraph");
    button = document.querySelector("button#button-paragraph");
    paragraphsCollection = document.getElementsByTagName("p");
  });

  afterEach(() => {
    document.querySelector("body").innerHTML = "";
  });

  it("should be button on the page", () => {
    expect(button).toBeTruthy();
  });

  it("should be input on the page", () => {
    expect(input).toBeTruthy();
  });

  it("should be 3 paragraphs on the page", () => {
    expect(paragraphsCollection).toHaveLength(3);
  });

  it("should be hidden button with empty input", () => {
    input.value = "";
    expect(button.hidden).toBeTruthy();
  });

  it("should be visible button with filled input", () => {
    input.value = "New paragraph";
    input.dispatchEvent(new Event("input"));
    expect(button.hidden).not.toBe(true);
  });

  it("should be new paragraph after clicked button", () => {
    input.value = "Fouth paragraph";
    button.dispatchEvent(new Event("click"));
    const paragraphsCollectionNew = document.getElementsByTagName("p");
    expect(paragraphsCollectionNew).toHaveLength(4);
  });

  it("should remove first paragraph after add vore than 5 parapraphs", () => {
    input.value = "Fouth paragraph";
    button.dispatchEvent(new Event("click"));
    input.value = "Fifth paragraph";
    button.dispatchEvent(new Event("click"));
    input.value = "Sixs paragraph";
    button.dispatchEvent(new Event("click"));
    const paragraphsCollectionNew = document.getElementsByTagName("p");
    expect(paragraphsCollectionNew).toHaveLength(5);
    expect(paragraphsCollectionNew[0].textContent).toBe("Second paragraph");
  });
});
