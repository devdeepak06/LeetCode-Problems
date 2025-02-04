// https://leetcode.com/problems/valid-palindrome/description/

var isPalindrome = function (s) {
  let filteredString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reverseString = filteredString.split('').reverse().join('');
  return filteredString === reverseString;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));