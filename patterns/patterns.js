//! first exercise
// const isPalindrom = (str) => {
//   if (str.split("").reverse().join("") === str) {
//     return true;
//   }
//   return false;
// };
// const str = "Aziza";
// const res = isPalindrom(str);
// console.log(res, ":result");

//! first exercise with two pointer patterns
// const isPalindromTwoPointers = (str) => {
//   let start = 0;
//   let end = str.length - 1;
//   while (start < end) {
//     if (str[start] !== str[end]) {
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return true;
// };
// console.log(isPalindromTwoPointers("Aziza"));

//!sum of three values
// const sumThreeValues = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       for (let k = j; k < arr.length; k++) {
//         if (
//           arr[i] !== arr[j] &&
//           arr[j] !== arr[k] &&
//           arr[i] !== arr[k] &&
//           arr[i] + arr[j] + arr[k] === target
//         ) {
//           console.log(arr[i], arr[j], arr[k]);
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// };
// const arr = [3, 7, 1, 5, 8, 2];
// const target = 20;
// const res = sumThreeValues(arr, target);
// console.log(res);

//! with patterns multiple pointers
const sumThreeValues = (arr, target) => {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[left] + arr[i] + arr[right];
      if (sum === target) {
        return true;
      } else if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      }
    }
  }
  return false;
};
const arr = [3, 7, 1, 5, 8, 2];
const target = 19;
const res = sumThreeValues(arr, target);
console.log(res);
