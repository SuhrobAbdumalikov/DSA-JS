// const linerSearch = (arr, num) => {
//   arr.forEach((element) => {
//     if (element === num) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = linerSearch(arr, 5);
// console.log(result);

// const binarySearch = (arr, num) => {
//   let left = arr[0];
//   let right = arr.length;

//   while (left <= right) {
//   let middle = Math.floor((right + left) / 2);
//   }

//   for (const key of arr) {
//     if (arr[key] < middle) {
//       return (left = arr[key]);
//     } else {
//       return false;
//     }
//   }
// };

// const arr = [1, 2, 3, 4, 5, 6];
// const result = binarySearch(arr, 5);
// console.log(result);

//! naive search ===========/

const naiveSearch = (str, compareStr) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < compareStr.length; j++) {
      if (compareStr[j] !== str[i + j]) break;
      if (j === compareStr.length - 1) {
        count++;
      }
    }
  }
  return count;
};
const str = "lorelod loled lol lole";
const result = naiveSearch(str, "lol");
console.log(result);
