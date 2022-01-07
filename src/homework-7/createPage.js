/*
    Сверстать страницу и подключить к ней файл со
    скриптом. На странице должны быть три текстовых
    параграфа, поле ввода и кнопка. Напишите скрипт,
    который будет выполнять следующие условия:
    1.Кнопка скрыта, если в поле ввода нет значения.
    2.При клике на кнопку добавляется новый параграф,
    содержащий текст из поля ввода.
    3*.Если параграфов становится больше 5, первый из 
    них удаляется.
*/

export function createPage(element) {
  element.innerHTML = `
            <input id="input-paragraph"></input>
            <button id="button-paragraph">Add</button>
            <p>First paragraph</p>
            <p>Second paragraph</p>
            <p>Third paragraph</p>
        `;

  const input = document.querySelector("input#input-paragraph");
  input.focus();

  const button = document.querySelector("button#button-paragraph");
  button.hidden = true;

  input.addEventListener("input", () => {
    button.hidden = input.value.trim() === "";
  });

  button.addEventListener("click", () => {
    const paragraph = document.createElement("p");
    paragraph.textContent = input.value.trim();
    const paragraphsCollection = element.getElementsByTagName("p");
    element.append(paragraph);
    if (paragraphsCollection.length > 5) {
      paragraphsCollection[0].remove();
    }
    button.hidden = true;
    input.value = "";
    input.focus();
  });
}
