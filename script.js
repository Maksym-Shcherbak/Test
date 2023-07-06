let textFromUser = prompt("").replace(/[^a-zа-яіїєґ ]/gi, "");
console.log(textFromUser);
const firstUniqueChar = findUniqueSymbol(textFromUser);
alert(`First unique symbol is ${firstUniqueChar}`);

function findUniqueSymbol(text) {
  let firstUniqueLetter;
  let noRepeatLetter = [];
  let repeatLetter = [];

  let arrFromText = text.split(" ");

  for (let word of arrFromText) {
    let arrFromWord = word.split("");
    firstUniqueLetter = arrFromWord[0];
    for (let i = 0; i < arrFromWord.length; i += 1) {
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
    repeatLetter = [];
  }

  for (let i = 0; i < noRepeatLetter.length; i += 1) {
    let uniLetter = noRepeatLetter[i];
    if (
      !noRepeatLetter.includes(uniLetter, i + 1) &&
      !repeatLetter.includes(uniLetter)
    ) {
      return uniLetter;
    } else {
      repeatLetter.push(uniLetter);
    }
  }
  return null;
}
