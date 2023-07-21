"use strict";
//оголуємо змінну і записуємо у неї введений текст, одразу видаляємо усі символи окрім букв і пробілів
let textFromUser = prompt("");
console.log(textFromUser);
//робимо перевірку чи був введений текст,якщо ні виводимо сповіщення, якщо так виконуємо функцію
if (textFromUser === null) {
  alert("Canceled. Please, enter refresh page.");
} else {
  const firstUniqueChar = (text) => {
    // оголушуємо масив, в якому будуть зберігатися унікальні символи
    let noRepeatChar = [];
    // видаляємо усі символи окрім букв, робимо з отриманого рядка масив із слів
    let arrFromText = text.replace(/[^a-zа-яіїєґ]/gi, " ").split(" ");
    console.log(arrFromText);
    // перебираємо кожне слово масиву
    for (let word of arrFromText) {
      if (word === " ") {
        continue; // пропускаємо пробіли у масиві
      }
      //ролбимо з кожного слова масив з літер та шукаємо перший унікальний символ за допомогою методу find
      let arrFromWord = word.split("");
      // додаємо у масив унікальний символ
      noRepeatChar.push(
        [...arrFromWord].find((n, i, a) => a.indexOf(n) === a.lastIndexOf(n))
      );
    }
    // знаходимо у масиві унікальних символів перший унікальний символ
    const uniChar = [...noRepeatChar].find(
      (n, i, a) => a.indexOf(n) === a.lastIndexOf(n)
    );
    console.log(uniChar);
    if (uniChar) {
      return alert(`First unique symbol is ${uniChar}`);
    }
    return alert(`First unique symbol is not find`);
  };
  firstUniqueChar(textFromUser);
}
