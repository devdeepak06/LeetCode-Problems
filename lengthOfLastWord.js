// https://leetcode.com/problems/length-of-last-word/description/
var lengthOfLastWord = function (s) {
  let words = s.trim().split(' ');
  let lastWord = words[words.length - 1];
  return lastWord.length;
};
console.log(lengthOfLastWord("luffy is still joyboy"));