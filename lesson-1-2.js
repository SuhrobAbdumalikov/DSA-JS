// const arr = [1, 2, 4, 5, 10, 6, 3];

// const evenInt = (arr) => {
//   if (arr) {
//     const newArr = arr.map((arr) => arr % 2 != 0);
//     return newArr;
//   }
// };
// console.log(evenInt(arr));

//==========

// const arr = [1, 3, 4, 5];
// const arr2 = [2, 6, 7, 8];

// const sumArrays = (arr1, arr2) => {
//   console.log(arr1.concat(arr2).sort((a, b) => a - b));
// };

// sumArrays(arr, arr2);

// const arr = [1, 21, 3, 14, 5, 60, 7, 6];
// const val = 81;

// const foo = (arr, val) => {
//   return arr.reduce((a, b) => a += b === val);
// };

// console.log(foo(arr, val));

// array data structure and linkedlist =====================

// const arr = [1, 2, 3, 6];
// const newArr = [];
// let num = 1

// const foo = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] !== arr[j]) {
//          num *= arr[j]
//       }
//       newArr.push(num)
//     }
//   }
//   return newArr
// };

// const result = foo(arr);
// console.log(result);

// const foo = (arr) => {
//     let num = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (num < arr[i]) {
//             return num
//         }
//         return arr[i]
//     }
// }

// const arr = [3,7,9,12]
// const result = foo(arr)
// console.log(result);

// const foo = (arr) => {
//   let unique = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[i] !== arr[j]) continue
//         else{
//             arr[i] = unique
//         }
//     }
//   }
//   return unique;
// };

// const arr = [ 5, 6, 6, 7, 7,2];
// const result = foo(arr);
// console.log(result);

// ======>> hash map
// const foo = (arr) => {
//   let hash = {};
//   let order = [];

//   for (const val of arr) {
//     if (hash[val]) {
//       hash[val] += 1;
//     } else {
//       hash[val] = 1;
//       order.push(val);
//     }
//   }

//   for (const i of order) {
//     if (hash[i] === 1) {
//       return i;
//     }
//   }
// };

// const arr = [6, 6, 7, 7, 2, 5, 8, 2];
// const result = foo(arr);
// console.log(result);

// const foo = (arr) => {
//   let sorted = arr.sort((a, b) => a - b);
//   let maxNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === sorted[arr.length-2]) {
//         maxNum = arr[i]
//     }
//   }
//   return maxNum;

//   let max = arr[0];
//   let smax = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (max > arr[i] && smax < arr[i]) {
//       smax = arr[i];
//     }
//   }

//   for (const val of arr) {
//   }
//   return smax;
// };
// const arr = [1, 2, 4, 7, 3];
// const result = foo(arr);
// console.log(result);

// =================================================================================================================

//hometask = 4
// arr = [1,2,3,4,5] => n=3 n kirib keladi n ga nechi kirib kelsa chapdan shunchani kesib ongdan qoshish kerak
// arr = [1,5,-3,6,-1,0,8] => sortlash
// arr = [1,2,3,4,5] => [5,1,4,2,3] => bunda bitta katta va bitta kamini qoshish
// vary hard => arr = [-2,10,7,-5,15,6]

//1-masala👍==============

// const foo = (arr, num) => {
//   if (num > arr.length) {
//     return `${num} is bigger than array length!`;
//   }
//   const newArr = arr.splice(-num);
//   return [...newArr, ...arr];
// };

// const arr = [1, 2, 3, 4, 5];
// const res = foo(arr, 2);
// console.log(res);

//2-masala 1-usul👍 ========================

// const foo = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] < arr[j - 1]) {
//         let xNum = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = xNum;
//       }
//     }
//   }
//   return arr;
// };
// const arr = [2, 3, 5, 6, 8, 1, 7];
// const res = foo(arr);
// console.log(res);

//2-masala 2-usul👍================

// const foo = (arr) => arr.sort((a, b) => a - b);
// const arr = [2, 3, 5, 6, 8, 1, 7];
// const res = foo(arr);
// console.log(res);

//3-masala 👍====================

// const foo = (arr) => {
//   let num = [];
//   arr.sort((a, b) => a - b);
//   let lang = arr.length - 1;
//   for (let i = 0; i <= lang; i++, lang--) {
//     num.push(arr[i]);
//     if (i !== lang) {
//       num.push(arr[i]);
//     }
//   }
//   return num;
// };

// const arr = [9, 7, 1, 3, 10, 34, 0.5];
// const res = foo(arr);
// console.log(res);

//4-masala very hard👍 =================

// const boo = (arr) => {
//   let newArr = [];
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       num += arr[j];
//       newArr.push(num);
//     }
//     num = 0;
//   }
//   return Math.max(...newArr);
// };

// const arr = [-2, 10, 7, -5, 15, 6];
// const result = boo(arr);
// console.log(result);

//Greedy algorithm ================>>
// const foo = (arr) => {
//   let local = Number.NEGATIVE_INFINITY;
//   let global = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     local = local + arr[i] > arr[i] ? local + arr[i] : arr[i];
//     global = global > local ? global : local;
//   }
//   return global;
// };
// const arr = [-2, 10, 7, -5, 15, 6];
// const result = foo(arr);
// console.log(result);

// two pointers pattern algorithm ===============>>
// const foo = (arr) => {
//   let right = arr.length - 1;
//   let left = 0;
//   let mid = Math.floor(arr.length / 2);
//   let form = [];

//   for (let i = 0; i < mid; i++) {
//     form.push(arr[right]);
//     right--;
//     form.push(arr[left]);
//     left++;
//   }

//   if (arr.length % 2 !== 0) {
//     form.push(arr[mid]);
//   }
//   return form;
// };
// const arr = [1, 2, 3, 4, 5];
// const res = foo(arr);
// console.log(res);
