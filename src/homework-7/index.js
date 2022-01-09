import { createPage } from "./createPage";

(() => {
  const container = document.querySelector("div#container");
  if (container && typeof container === "object") {
    createPage(container);
  }
})();
