// 344. Reverse String
//https://leetcode.com/problems/reverse-string/description/

var reverseString = function (s) {
  let sLen = s.length;
  let idx = 0;
  let jdx = sLen - 1;
  while (idx < jdx) {
    [s[idx], s[jdx]] = [s[jdx], s[idx]];
    idx += 1;
    jdx -= 1;
  }
  return s;
};

var s = ["h", "e", "l", "l", "o"];
var t = ["H", "a", "n", "n", "a", "h"];

console.log(reverseString(s));
console.log(reverseString(t));


// Input: s = ["h", "e", "l", "l", "o"]
// Output: ["o", "l", "l", "e", "h"]
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]