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

// const isPalindromeWithOneRemove = (str) => {
//   const isPalindrome = (s, right) => {
//     while (left < right) {
//       if (s[left] !== s[right]) return false;
//       left++;
//       right--;
//     }
//     return true;
//   };

//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return (
//         isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1)
//       );
//     }
//     left++;
//     right--;
//   }
//   return true;
// };

// console.log(isPalindromeWithOneRemove("asil"));

//!=============================================================================================================================
// Buy and Sell Profit ====
// const maxProfit = (prices) => {
//   let left = 0; // Buy
//   let right = 1; // sell
//   let max_profit = 0;
//   while (right <= prices.length) {
//     if (prices[left] < prices[right]) {
//       let profit = prices[right] - prices[left];

//       max_profit = Math.max(max_profit, profit);
//     } else {
//       left = right;
//     }
//     right++;
//   }
//   return max_profit;
// };

// console.log(maxProfit([7, 1, 3, 4, 5, 8, 6]));

// const foo = (str, k) => {
//   let start = 0;
//   let end = 0;

//   const helperF = (s) => {
//     let hash = {};
//     let longest = 0;
//     for (let i = 0; i < s.length; i++) {
//       if (!hash[s[i]]) {
//         hash[s[i]] = 1;
//       } else {
//         hash[s[i]] += 1;
//       }
//       longest = Math.max(longest, hash[s[i]]);
//     }
//     return longest;
//   };

//   let mostF = helperF(str);
//   let window = 0;

//   while (end <= str.length) {
//     if (end - start + 1 - mostF > k) {
//       start++;
//       window++;
//     } else {
//       end++;
//       window--;
//     }
//   }

//   return window;
// };

// const boo = (str, k) => {
//   let left = 0;
//   let right = 0;
//   let count = new Map();
//   let res = 0;

//   for (right = 0; right < str.length; right++) {
//     let wLen = right - left + 1;
//     count.set(str[right], 1 + count.get(str[right]) || 1);

//     if (wLen - Math.max(...count.values()) > k) {
//       left++;
//     }
//     wLen = right - left + 1;
//     res = Math.max(res, wLen);
//   }
//   return res;
// };

// console.log(boo("aabccbb", 2));

// function minWindow(str1, str2) {
//   let sizeStr1 = str1.length;
//   let sizeStr2 = str2.length;
//   let minSubLen = Infinity;
//   let indexS1 = 0;
//   let indexS2 = 0;
//   let minSubsequence = "";
//   while (indexS1 < sizeStr1) {
//     if (str1[indexS1] === str2[indexS2]) {
//       indexS2++;
//       if (indexS2 === sizeStr2) {
//         let start = indexS1;
//         let end = indexS1;
//         indexS2--;
//         while (indexS2 >= 0) {
//           if (str1[start] === str2[indexS2]) {
//             indexS2--;
//           }
//           start--;
//         }
//         start++;
//         if (end - start + 1 < minSubLen) {
//           minSubLen = end - start + 1;
//           minSubsequence = str1.slice(start, end + 1);
//         }
//         indexS1 = start;
//         indexS2 = 0;
//       }
//     }
//     indexS1++;
//   }
//   return minSubsequence;
// }
