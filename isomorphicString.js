// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  let mapST = new Map();
  let mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    let charS = s[i], charT = t[i];

    if ((mapST.has(charS) && mapST.get(charS) !== charT) ||
      (mapTS.has(charT) && mapTS.get(charT) !== charS)) {
      return false;
    }

    mapST.set(charS, charT);
    mapTS.set(charT, charS);
  }

  return true;
}

// Example usage:
console.log(isIsomorphic("egg", "add"));  // true
console.log(isIsomorphic("foo", "bar"));  // false
console.log(isIsomorphic("paper", "title"));  // true
console.log(isIsomorphic("badc", "baba"));  // false