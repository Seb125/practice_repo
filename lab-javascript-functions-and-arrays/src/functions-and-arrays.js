// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2){
    return num1;
  } 
  else {
    return num2;
  }
}
//comment
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

let greatestProductOfDiagonals = function (matrix) {
  const numRows = matrix.length;
  const numCol = matrix[0].length;
  let greatesDiagonalProduct = 0;
  for (let i = 0; i < numRows; i++) {
    // first negative diagonals
    let firstDiagonal = [];
    let j = i;
    let k = 0;
    while (j < numRows) {  // while loop to get all diagonal elements starting from index i
     
      firstDiagonal.push(matrix[j][k]);
      
      j++;
      k++;
      
    }
    if (firstDiagonal.length >= 4) {
      for (let y = 0; y <= firstDiagonal.length - 4; y++) {
        if (greatesDiagonalProduct < firstDiagonal.slice(y, y+4).reduce((a,b) => a*b)) {
          greatesDiagonalProduct = firstDiagonal.slice(y, y+4).reduce((a,b) => a*b);
          console.log(firstDiagonal);
        }
    }
  }
   

    let secondDiagonal = [];
    j = i;
    k = 0;

    while (j >= 0) {  // while loop to get all diagonal elements starting from index i
     
      secondDiagonal.push(matrix[j][k]);
      
      j--;
      k++;
      
    }

    if (secondDiagonal.length >= 4) {
      for (let y = 0; y <= secondDiagonal.length - 4; y++) {
        if (greatesDiagonalProduct < secondDiagonal.slice(y, y+4).reduce((a,b) => a*b)) {
          greatesDiagonalProduct = secondDiagonal.slice(y, y+4).reduce((a,b) => a*b);
          console.log(secondDiagonal);
        }
    }
  }
    
    

  

  let thirdDiagonal = [];
  j = i;
  k = numCol-1;
  while (j < numRows) {  // while loop to get all diagonal elements starting from index i
   
    thirdDiagonal.push(matrix[j][k]);
    
    j++;
    k--;
    
  }

  if (thirdDiagonal.length >= 4) {
    for (let y = 0; y <= thirdDiagonal.length - 4; y++) {
      if (greatesDiagonalProduct < thirdDiagonal.slice(y, y+4).reduce((a,b) => a*b)) {
        greatesDiagonalProduct = thirdDiagonal.slice(y, y+4).reduce((a,b) => a*b);
        console.log(thirdDiagonal);
      }
  }
}
  

  let fourthDiagonal = [];
  j = i;
  k = numCol-1;

  while (j >= 0) {  // while loop to get all diagonal elements starting from index i
   
    fourthDiagonal.push(matrix[j][k]);
    
    j--;
    k--;
    
  }

  if (fourthDiagonal.length >= 4) {
    for (let y = 0; y <= fourthDiagonal.length - 4; y++) {
      if (greatesDiagonalProduct < fourthDiagonal.slice(y, y+4).reduce((a,b) => a*b)) {
        greatesDiagonalProduct = fourthDiagonal.slice(y, y+4).reduce((a,b) => a*b);
        console.log(fourthDiagonal);
      }
  }
}
  
}

console.log(greatesDiagonalProduct);

}