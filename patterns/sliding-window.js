// const findRepeatedCharacter = (str, k) => {
//   const hash = {};
//   for (let i = 0; i < str.length - 1; i++) {
//     const newStr = str[i] + str[i + 1];
//     if (!hash[newStr]) {
//       hash[newStr] = 1;
//     } else {
//       hash[newStr] += 1;
//     }
//   }
//   return hash;
// };
// const str = "AZBFJKAZLM";
// const res = findRepeatedCharacter(str, 2);
// console.log(res);

//! minimum Window Subsequence
// const minimumWindowSubsequence = (str, str2) => {
//   let res = "";
//   let idx = 0;
//   let idx2 = 0;

//   while (idx < str.length && idx2 < str2.length) {
//     if (str[idx] === str2[idx2]) {
//       res += str[idx];
//       idx2++;
//     }
//     idx++;
//   }
//   return res;
// };
// const string = "ABCDEBBDE";
// const string2 = "BDE";
// const result = minimumWindowSubsequence(string, string2);
// console.log(result);

// const RevereWords = (str) => {
//   let words = str.split(" ");
//   let start = 0;
//   let end = words.length - 1;

//   while (start < end) {
//     const temp = words[start];
//     words[start] = words[end];
//     words[end] = temp;
//     start++;
//     end--;
//   }
//   return words.join(" ").replace(/\s+/g, " ");
// };
// const text = "hello          World  John   ";
// const res = RevereWords(text);
// console.log(res);

// const Reverse = (str) => {
//   str = str.trim().replace(/\s+/g, " ");
//   str = [...str];
//   let strLang = str.length;

//   const RChar = (left, right, str) => {
//     while (left < right) {
//       [str[left], str[right]] = [str[right], str[left]];
//       left++;
//       right--;
//     }
//     return str;
//   };

//   str = RChar(0, strLang - 1, str);
//   let left = 0;
//   let right = 0;

//   while (right < strLang) {
//     while (right < strLang) {
//       if (str[right] === " ") {
//         break;
//       }
//       right++;
//     }

//     RChar(left, right - 1, str);
//     left = right + 1;
//     right++;
//   }

//   return str.join("");
// };

// const str = "  Hello    World   ";
// const res = Reverse(str);
// console.log(res);

const isPalindromeWithOneRemove = (str) => {
  const isPalindrome = (s, right) => {
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return (
        isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

// console.log(isPalindromeWithOneRemove("asil"));
