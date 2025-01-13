var strStr = function (haystack, needle) {
  const n = haystack.length;
  const m = needle.length;
  if (m === 0) {
    return 0;
  }
  if (n < m) {
    return -1;
  }
  for (let i = 0; i < n - m + 1; i++) {
    let j = 0;
    for (j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === m) {
      return i;
    }
  }
  return -1;
};


console.log(strStr('codeleet', 'leet')); 