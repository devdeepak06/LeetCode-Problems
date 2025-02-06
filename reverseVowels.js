// 345: Reverse vowels of a string
// https://leetcode.com/problems/reverse-vowels-of-a-string/description/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const characters = s.split('');
  let idx = 0;
  let jdx = characters.length - 1;
  while (idx < jdx) {
    while (idx < jdx && !vowels.has(characters[idx])) {
      idx++;
    }
    while (idx < jdx && !vowels.has(characters[jdx])) {
      jdx--;
    }

    [characters[idx], characters[jdx]] = [characters[jdx], characters[idx]];
    idx++;
    jdx--;
  }
  return characters.join('');
};

console.log(reverseVowels("IceCreAm"));



// * Input: s = "IceCreAm"
//   * Output: "AceCreIm"






/**
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 * Example 1:
 * Input: s = "IceCreAm"
 * Output: "AceCreIm"
 * Explanation:
 * The vowels in s are['I', 'e', 'e', 'A'].On reversing the vowels, s becomes "AceCreIm".
 */