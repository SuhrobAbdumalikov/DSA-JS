const findRepeatedCharacter = (str, k) => {
  const hash = {};
  for (let i = 0; i < str.length - 1; i++) {
    const newStr = str[i] + str[i + 1];
    if (!hash[newStr]) {
      hash[newStr] = 1;
    } else {
      hash[newStr] += 1;
    }
  }
  return hash;
};
const str = "AZBFJKAZLM";
const res = findRepeatedCharacter(str, 2);
// console.log(res);

//! minimum Window Subsequence
// str = "abbcb"; => res = 'abbc
// str2 = "ac";

//str = 'abcdebdde' => 'bcde' , 'bdde' => 1 chisini qaytaramiz. 'bcde'
// str2 = 'bde'

const minimumWindowSubsequence = (str, str2) => {
  const hash = {};
  for (let i = 0; i < str.length; i++) {
    const newStr = str[i];
    if (!hash[newStr]) {
      hash[newStr] = 1;
    } else {
      hash[newStr] += 1;
    }
  }
  return hash;
};
const string = "abbc";
const string2 = "ac";
const result = minimumWindowSubsequence(string, string2);
console.log(result);
