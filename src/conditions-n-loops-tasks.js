/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number > -1;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let actualMaxNumber = 0;
  const inputArgs = [a, b, c];
  for (let i = 0; i < inputArgs.length; i += 1) {
    if (actualMaxNumber < inputArgs[i]) {
      actualMaxNumber = inputArgs[i];
    }
  }
  return actualMaxNumber;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let isDirectLinesCaptured = false;
  let isDiagonalLineCaptured = false;
  if (queen.x === king.x || queen.y === king.y) {
    isDirectLinesCaptured = true;
  }
  if (Math.abs(queen.x - king.x) !== Math.abs(queen.y - king.y)) {
    isDiagonalLineCaptured = true;
  }
  return isDiagonalLineCaptured === isDirectLinesCaptured;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const maxNumber = Math.max(a, b, c);
  let bothSides = 0;
  const inputArgs = [a, b, c];
  for (let i = 0; i < inputArgs.length; i += 1) {
    if (inputArgs[i] !== maxNumber) {
      bothSides += inputArgs[i];
    }
  }
  return bothSides > maxNumber;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let inputNumber = num;
  let finalStr = '';
  if (inputNumber >= 20) {
    finalStr += 'XX';
    inputNumber -= 20;
  }
  if (inputNumber >= 10) {
    finalStr += 'X';
    inputNumber -= 10;
  }
  if (inputNumber >= 9) {
    finalStr += 'IX';
    inputNumber -= 9;
  }
  if (inputNumber >= 8) {
    finalStr += 'VIII';
    inputNumber -= 8;
  }
  if (inputNumber >= 7) {
    finalStr += 'VII';
    inputNumber -= 7;
  }
  if (inputNumber >= 6) {
    finalStr += 'VI';
    inputNumber -= 6;
  }
  if (inputNumber >= 5) {
    finalStr += 'V';
    inputNumber -= 5;
  }
  if (inputNumber >= 4) {
    finalStr += 'IV';
    inputNumber -= 4;
  }
  if (inputNumber >= 1) {
    finalStr += 'I';
    inputNumber -= 1;
  }
  return inputNumber >= 1
    ? finalStr + convertToRomanNumerals(inputNumber)
    : finalStr;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const unitsOfNumbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  let finalStr = '';
  const space = ' ';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '.':
        finalStr += 'point ';
        break;
      case ',':
        finalStr += 'point ';
        break;
      case '-':
        finalStr += 'minus ';
        break;
      default:
        if (numberStr.length > 1 && i !== numberStr.length - 1) {
          finalStr += unitsOfNumbers[numberStr[i]] + space;
        } else {
          finalStr += unitsOfNumbers[numberStr[i]];
        }
    }
  }
  return finalStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let finalStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    finalStr += str[i];
  }
  return finalStr === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let output = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      output = i;
      break;
    }
  }
  return output;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let inputNumber = num;
  if (inputNumber === 0) {
    return false;
  }
  if (inputNumber % 10 === digit) {
    return true;
  }
  inputNumber = Math.floor(inputNumber / 10);
  return isContainNumber(inputNumber, digit);
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length === 0) {
    return -1;
  }
  let finalOutputIndex = 0;
  let totalArrSum = 0;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    totalArrSum += arr[i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    actualSum += arr[i];
    if (totalArrSum === actualSum) {
      finalOutputIndex = i;
      break;
    }
    totalArrSum -= arr[i];
  }
  return !finalOutputIndex ? -1 : finalOutputIndex;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const finalOutputArr = [];
  for (let i = 0; i < size; i += 1) {
    finalOutputArr[i] = [null];
  }

  function recurseMatrix(
    beginHorizontal,
    closeHorizontal,
    beginVertical,
    closeVertical,
    amount
  ) {
    if (beginHorizontal > closeHorizontal && beginVertical > closeVertical) {
      return;
    }
    let innerOfArr = amount;
    let startX = beginHorizontal;
    let stopX = closeHorizontal;
    let startY = beginVertical;
    let stopY = closeVertical;
    for (let i = startY; i <= stopY; i += 1) {
      innerOfArr += 1;
      finalOutputArr[startX][i] = innerOfArr;
    }
    startX += 1;
    for (let i = startX; i <= stopX; i += 1) {
      innerOfArr += 1;
      finalOutputArr[i][stopY] = innerOfArr;
    }
    stopY -= 1;
    for (let i = stopY; i >= startY; i -= 1) {
      innerOfArr += 1;
      finalOutputArr[stopX][i] = innerOfArr;
    }
    stopX -= 1;
    for (let i = stopX; i >= startX; i -= 1) {
      innerOfArr += 1;
      finalOutputArr[i][startY] = innerOfArr;
    }
    startY += 1;
    recurseMatrix(startX, stopX, startY, stopY, innerOfArr);
  }
  recurseMatrix(0, size - 1, 0, size - 1, 0);
  return finalOutputArr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const copyOfInput = matrix;
  const outputMatrix = new Array(matrix.length);
  for (let vertical = 0; vertical < matrix.length; vertical += 1) {
    outputMatrix[vertical] = new Array(null);
    for (let horizontal = 0; horizontal < matrix.length; horizontal += 1) {
      outputMatrix[vertical][horizontal] =
        matrix[Math.abs(horizontal - matrix.length) - 1][vertical];
    }
  }
  return (() => {
    for (let y = 0; y < outputMatrix.length; y += 1) {
      for (let x = 0; x < outputMatrix.length; x += 1) {
        copyOfInput[y][x] = outputMatrix[y][x];
      }
    }
    return copyOfInput;
  })();
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortThroughMerging = (leftSideArr, rightSideArr) => {
    const clonedArr = arr;
    const finalSortedArr = [];
    let leftSideIndex = 0;
    let rightSideIndex = 0;

    while (
      leftSideArr.length > leftSideIndex &&
      rightSideArr.length > rightSideIndex
    ) {
      if (leftSideArr[leftSideIndex] <= rightSideArr[rightSideIndex]) {
        finalSortedArr[finalSortedArr.length] = leftSideArr[leftSideIndex];
        leftSideIndex += 1;
      } else {
        finalSortedArr[finalSortedArr.length] = rightSideArr[rightSideIndex];
        rightSideIndex += 1;
      }
    }

    while (leftSideIndex < leftSideArr.length) {
      finalSortedArr[finalSortedArr.length] = leftSideArr[leftSideIndex];
      leftSideIndex += 1;
    }

    while (rightSideIndex < rightSideArr.length) {
      finalSortedArr[finalSortedArr.length] = rightSideArr[rightSideIndex];
      rightSideIndex += 1;
    }

    for (let el = 0; el < finalSortedArr.length; el += 1) {
      clonedArr[el] = finalSortedArr[el];
    }

    return clonedArr;
  };

  if (arr.length < 2) {
    return arr;
  }

  const middleIndexArr = Math.floor(arr.length / 2);
  const leftSideArr = [];
  const rightSideArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (middleIndexArr > i) {
      leftSideArr[i] = arr[i];
    } else {
      rightSideArr[Math.abs(middleIndexArr - i)] = arr[i];
    }
  }

  return sortThroughMerging(sortByAsc(leftSideArr), sortByAsc(rightSideArr));
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let finalStrOutput = str;
  let loopTimes = iterations;
  let storedValues = new Array(str);
  for (let loop = 0; loop < loopTimes; loop += 1) {
    let oddLetters = '';
    let evenLetters = '';
    for (let letter = 0; letter < finalStrOutput.length; letter += 1) {
      if (letter % 2 === 0) {
        evenLetters += finalStrOutput[letter];
      } else {
        oddLetters += finalStrOutput[letter];
      }
    }
    finalStrOutput = evenLetters + oddLetters;
    storedValues = [...storedValues, finalStrOutput];
    if (finalStrOutput === str) {
      loopTimes %= loop + 1;
      break;
    }
  }
  return storedValues[loopTimes];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const inputStr = number.toFixed();
  const outputNum = [];
  const remainsNum = [];
  let leastNumIndex;
  for (let el = inputStr.length - 1; el >= 0; el -= 1) {
    if (inputStr[el] < inputStr[el + 1]) {
      leastNumIndex = el;
      break;
    }
  }
  for (let el = 0; el < leastNumIndex; el += 1) {
    outputNum.push(inputStr[el]);
  }
  for (let el = leastNumIndex + 1; el < inputStr.length; el += 1) {
    remainsNum.push(inputStr[el]);
  }
  remainsNum.sort();
  for (let el = 0; el < remainsNum.length; el += 1) {
    if (remainsNum[el] > inputStr[leastNumIndex]) {
      outputNum.push(remainsNum[el]);
      remainsNum.splice(el, 1);
      break;
    }
  }
  remainsNum.push(inputStr[leastNumIndex]);
  remainsNum.sort();
  return +(outputNum.join('') + remainsNum.join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
