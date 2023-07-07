// оголуємо змінну і записуємо у неї введений текст, одразу видаляємо усі символи окрім букв і пробілів
let textFromUser = prompt("").replace(/[^a-zа-яіїєґ ]/gi, "");
console.log(textFromUser);
// записуємо у змінну результат виконання функції
const firstUniqueChar = findUniqueSymbol(textFromUser);
// виводимо результат виконання функції користувачу
if (firstUniqueChar === null) {
  alert("Canceled. Please, refresh page.");
}
alert(`First unique symbol is ${firstUniqueChar}`);
location.reload();

function findUniqueSymbol(text) {
  // оголушуємо змінні, в яких будуть зберігатися унікальні символи та символи,які повторюються
  let noRepeatLetter = [];
  let repeatLetter = [];
  // робимо з отриманого рядка масив
  let arrFromText = text.split(" ");
  // перебираємо кожне слово масиву
  for (let word of arrFromText) {
    //ролбимо з кожного слова масив з літер та перебираємо його за допомогою циклу
    let arrFromWord = word.split("");
    for (let i = 0; i < arrFromWord.length; i += 1) {
      // перевіряємо чи повторюється символ у слові та чи є він у масиві символів, що повторюються, якщо ні, то додаємо його у масив унікальних символів,
      // якщо так, то додаємо у масив символів, що повторюються
      if (
        !arrFromWord.includes(arrFromWord[i], i + 1) &&
        !repeatLetter.includes(arrFromWord[i])
      ) {
        noRepeatLetter.push(arrFromWord[i]);
        break;
      } else {
        repeatLetter.push(arrFromWord[i]);
      }
    }
    // у кінці циклу обнуляємо масив символів, що повторюються
    repeatLetter = [];
  }
  // перебираємо масив з унікальних символів i шукаємо перший неповторюваний символ
  for (let i = 0; i < noRepeatLetter.length; i += 1) {
    let uniLetter = noRepeatLetter[i];
    if (!noRepeatLetter.includes(uniLetter, i + 1)) {
      return uniLetter;
    }
  }
  return null;
}
