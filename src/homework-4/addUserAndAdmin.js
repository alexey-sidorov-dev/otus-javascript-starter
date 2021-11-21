/**
 Создайте объект user, содержащий поле name со
 значением ‘John’.
 1.Запросить у пользователя ввод числа. Записать
 введенное значение в поле age объекта user.
 2.Создать копию объекта user с именем admin.
 Добавить новому объекту поле role со значением
 ‘admin’.
 3*.Записать все значения полей объекта admin в
 отдельные переменные. Имена переменных
 должны совпадать с названиями полей.
 */

export function addUserAndAdmin() {
  /*
    1.Запросить у пользователя ввод числа. Записать
    введенное значение в поле age объекта user.
    */
  const user = { name: "John" };
  const providedAge = Number(prompt("Enter a number for age:"));
  user.age = Number.isNaN(providedAge) ? 0 : providedAge;

  /*
    2.Создать копию объекта user с именем admin.
    Добавить новому объекту поле role со значением
    ‘admin’.
    */
  const admin = { ...user, role: "admin" };
  /*
     3*.Записать все значения полей объекта admin в
    отдельные переменные. Имена переменных
    должны совпадать с названиями полей.
     */
  const { name, age, role } = admin;
  console.log(name, age, role);
}
