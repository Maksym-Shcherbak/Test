"use strict";
//оголуємо змінну і записуємо у неї введений текст, одразу видаляємо усі символи окрім букв і пробілів
let textFromUser = prompt("");
console.log(textFromUser);
//робимо перевірку чи був введений текст,якщо ні виводимо сповіщення, якщо так виконуємо функцію
if (textFromUser === null) {
  alert("Canceled. Please, enter refresh page.");
} else {
  const firstUniqueChar = (text) => {
    //видаляємо усі символи окрім букв і робимо масив із слів
    let arrFromText = text.replace(/[^a-zа-яіїєґ]/gi, " ").split(" ");
    //створюємо змінну для збереження унікального символа
    const uniChar = arrFromText
      //використовуючи метод reduce, створюємо масив з унікальних символів у кожному слові
      .reduce((noRepeatChar, word) => {
        return [
          ...noRepeatChar,
          word
            .split("")
            .find(
              (char, idx, arr) => arr.indexOf(char) === arr.lastIndexOf(char)
            ),
        ];
      }, [])
      //знаходимо унікальний символ
      .find((char, idx, arr) => arr.indexOf(char) === arr.lastIndexOf(char));
    uniChar
      ? alert(`First unique symbol is ${uniChar}`)
      : alert(`First unique symbol is not find`);
  };
  firstUniqueChar(textFromUser);
}
