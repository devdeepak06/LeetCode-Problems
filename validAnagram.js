// https://leetcode.com/problems/valid-anagram/description/
//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }

  return count.every(val => val === 0);
}

// Example usage:
console.log(isAnagram("anagram", "nagaram"));  // true
console.log(isAnagram("rat", "car"));  // false
console.log(isAnagram("listen", "silent"));  // true
console.log(isAnagram("deepak", "kdeeap"));  // true