// https://leetcode.com/problems/excel-sheet-column-number/

var titleToNumber = function (columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    result = result * 26 + (columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
  }
  return result;
};

// Example usage:
console.log(titleToNumber("A"));  // Output: 1
console.log(titleToNumber("AB")); // Output: 28
console.log(titleToNumber("ZZAAFV")); // Output: 320815582