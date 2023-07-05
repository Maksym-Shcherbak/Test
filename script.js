function findUniqueSymbol(text) {
  let arrFromText = text.split(" ");
  let arrFromWord = [];
  let newArr = [];
  let arrOfUniqueLetter = [];
  let firstUniqueLetter;
  for (let word of arrFromText) {
    arrFromWord = word.split("");
    newArr.push(arrFromWord);
  }

  for (let arrOfLetter of newArr) {
    firstUniqueLetter = arrOfLetter[0];

    arrOfLetter.shift(firstUniqueLetter);
    // console.log(arrOfLetter[0]);
    console.log(arrOfLetter);
    for (let i = 0; i < arrOfLetter.length; i += 1) {
      if (arrOfLetter.includes(firstUniqueLetter)) {
        firstUniqueLetter = arrOfLetter[i];
        arrOfLetter.shift(i);
      }

      console.log(arrOfLetter.includes(firstUniqueLetter));
    }
    console.log(firstUniqueLetter);
    arrOfUniqueLetter.push(firstUniqueLetter);
  }
  //   firstUniqueLetter = arrFromWord[0];
  //   console.log(arrFromWord[0]);
  //   arrFromWord.shift(firstUniqueLetter);
  //   for (let i = 0; i < arrFromWord.length; i += 1) {
  //     if (arrFromWord.includes(firstUniqueLetter)) {
  //       firstUniqueLetter = arrFromWord[i];
  //       arrOfUniqueLetter.push(firstUniqueLetter);
  //     }
  //     arrFromWord.shift(i);
  //     console.log(arrFromWord.includes(firstUniqueLetter));
  //   }
  console.log(arrFromText);
  console.log(newArr);
  console.log(arrOfUniqueLetter);

  return arrOfUniqueLetter;
}
console.log(
  findUniqueSymbol(
    "Дізнаємося середній рейтинг усієї нашої колекції. Для цього, додамо усі рейтинги, після чого поділимо це значення на кількість книг в колекції."
  )
);
