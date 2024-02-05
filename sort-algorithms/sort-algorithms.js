// ! Bubble Sort ===================// bubble sort always working o(n2)
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let a = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = a;
//       }
//     }
//   }
//   return arr;
// };

// const arr = [5, 3, 4, 1, 2];
// const result = bubbleSort(arr);
// console.log(result);

// ! Bubble Sort o(n) only nearly sorted array ===========//

// const bubbleSortN = (arr) => {
//   let IsSwap;
//   for (let i = 0; i < arr.length; i++) {
//     IsSwap = true;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let num = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = num;
//         IsSwap = false;
//       }
//     }
//     if (IsSwap) {
//       break;
//     }
//   }
//   return arr;
// };
// const arr = [5, 1, 2, 3, 4]; //* this is almost sorted array
// const result = bubbleSortN(arr);
// console.log(result);

// ! Sudo Code ==========//
// const SudoCode = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     var min = i;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[min] > arr[j]) {
//         min = j;
//       }
//     }
//     if (min !== i) {
//       [arr[i], arr[min]] = [arr[min], arr[i]];
//     }
//   }
//   return arr;
// };

// const arr = [5, 1, 7, 2, 3, 4, 6];
// const res = SudoCode(arr);
// console.log(res);

//! [5,3,4,1,2] => [3,5,4,1,2] => [3,4,5,1,2] => [] => insertion sort
// ====> hometask insertion,merge,radix sort qilish and hamma otilganlarni takrorlash,

