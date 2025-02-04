// https://leetcode.com/problems/excel-sheet-column-title/description/

/**
 *Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 * For example:
 * A -> 1
 * B -> 2
 * C -> 3
 * Z -> 26
 * AA -> 27
 * AB -> 28 
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = '';

  while (columnNumber > 0) {
    columnNumber--; // Adjust for 1-based index
    let remainder = columnNumber % 26;
    result = String.fromCharCode(65 + remainder) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
};

// Test cases
console.log(convertToTitle(1));    // "A"
console.log(convertToTitle(28));   // "AB"
console.log(convertToTitle(702));  // "ZZ"
console.log(convertToTitle(2147483647));  // "FXSHRXW"
