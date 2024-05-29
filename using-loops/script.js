// TODO: Implement the oddNumbers function

//Lösung mit array:

// function oddNumbers(number1, number2) {
//   let result = "";
//   if (number1 < 0 || number2 < 0) {
//     result = "one or both parameter below 0";
//   } else {
//     result = [];
//     for (let num = number1; num <= number2; num++) {
//       if (num % 2 !== 0) {
//         result.push(num);
//       }
//     }
//   }
//   return result;
// }

function oddNumbers(number1, number2) {
  let result = "";
  if (number1 < 0 || number2 < 0) {
    result = "one or both parameter below 0";
  } else {
    for (let num = number1; num <= number2; num++) {
      if (num % 2 !== 0 && num <= number2 - 2) {
        result += num + ", ";
      } else if (num % 2 !== 0) {
        result += num;
      }
    }
  }
  return result;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function

function charCount(word, character) {
  let result = 0;

  word = word.toLowerCase();
  character = character.toLowerCase();
  for (let indCount = 0; indCount < word.length; indCount++) {
    if (typeof word !== "string" || character.length !== 1) {
      break;
    } else if (word[indCount] === character) result++;
  }
  return result;
}

console.log(charCount("heLlo", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
