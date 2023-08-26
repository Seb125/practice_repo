// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2){
    return num1;
  } 
  else {
    return num2;
  }
}

// Iteration #2: Find longest word
const words = [];

function findLongestWord(words) {
  if (words.length > 0) {
    let longestWord = words[0];
    for (let i = 0; i < words.length-1; i++) {
      if (longestWord.length < words[i+1].length) {
        longestWord = words[i+1];
      }
    }
    return longestWord;
  }
  else {
    return null;
  }
}

console.log(findLongestWord(words));


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}



// Iteration #3.1 Bonus:
function sum() {}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {

  if (numbersAvg.length === 0) {
    return null;
  } 
  else {
      let sum = sumNumbers(numbersAvg);
      return sum/numbersAvg.length;
    }
  }


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) { 
  let sum = 0;
  if (wordsArr.length === 0) {
    return null;
  } 
  else {

      for (const value of wordsArr) {
        sum += value.length;
      }
    }
  return sum/wordsArr.length;
  }


// Bonus - Iteration #4.1
function avg(array) {
  if (array.length === 0) {
    return null;
  } 
  let sum = 0;
  for (const value of array) {
    switch(typeof value) {
      case "string":
        sum += value.length;
        break;
      case "number":
        sum += value;
        break;
      case "boolean":
        sum += value*1;
        break;
    }
  }
  return sum/array.length;
}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
