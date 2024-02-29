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

// ! with patterns multiple pointers
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
const arr1 = [3, 7, 1, 5, 8, 2];
const target = 19;
const res = sumThreeValues(arr1, target);
console.log(res);

//! ==========***============= HomeWork Patterns with Two pointers ============***==========

//* ================== Task 1 ===================

//? Remove nth Node from End of List
//? Statement:
//? Given a singly linked list, remove the nth node from the end of the list and return its head.

//? Linked list: 32 → 78 → 65 → 90 → 12 → 44 → NULL
//? n = 3
//? output:
//? 32 -> 78 -> 65 -> 12 -> 44 -> NULL

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  Push(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.length++;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.length++;
    return this;
  }

  Print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const RemoveNthNode = (head, num) => {
  let newNode = new Node(0);
  newNode.next = head;
  let start = newNode;
  let end = newNode;

  for (let i = 0; i <= num; i++) {
    start = start.next;
  }

  while (start !== null) {
    start = start.next;
    end = end.next;
  }

  end.next = end.next.next;
  return newNode.next;
};

const linkedList = new LinkedList();

linkedList.Push(32);
linkedList.Push(78);
linkedList.Push(65);
linkedList.Push(90);
linkedList.Push(12);
linkedList.Push(44);
// linkedList.Print();
// let res = RemoveNthNode(linkedList.head, 3);
// linkedList.Print();

//* ================== Task 2 ===================

//? Sort Colors
//? Given an array, colors, which contains a combination of the following three elements:
//? 0 (representing red)
//? 1 (representing white)
//? 2 (representing blue)
//? Sort the array in place so that the elements of the same color are adjacent, with the colors in the order of red, white, and blue. The function should return the same array.
//? Input:
//? colors=[1,0,2,1,2,2]
//? Output:
//? colors=[0,1,1,2,2]

// const SortColors = (color) => {
//   let start = 0;
//   let end = color.length - 1;
//   let mid = 0;

//   while (mid <= end) {
//     if (color[mid] === 0) {
//       [color[start], color[mid]] = [color[mid], color[start]];
//       start++;
//       mid++;
//     } else if (color[mid] === 2) {
//       [color[end], color[mid]] = [color[mid], color[end]];
//       end--;
//     } else {
//       mid++;
//     }
//   }

//   return color;
// };

// const arr = [1, 2, 0, 1, 0, 2, 1, 1, 2, 0];
// console.log(SortColors(arr));

//* ================== Task 3 ===================

//? Reverse Words in a String
//? Given a sentence, reverse the order of its words without affecting the order of letters within a given word.
//? Note: The input string may contain leading or trailing spaces or multiple spaces between words. The returned string, however, should only have a single space separating each word. Do not include any extra spaces.
//? Input:
//? Input String = "Hello Friend"
//? Output:
//? Reversed String = "Friend Hello"

const reverseWords = (str) => {
  const words = str.split(" ");
  let start = 0;
  let end = words.length - 1;

  while (start < end) {
    const temp = words[start];
    words[start] = words[end];
    words[end] = temp;

    start++;
    end--;
  }
  return words.join(" ");
};
// console.log(reverseWords("Hello Friend"));

//* ================== Task 4 ===================

//? Valid Palindrome II
//? Write a function that takes a string as input and checks whether it can be a valid palindrome by removing at most one character from it.
//? Input:
//? string =  "A B C E B A"
//? output:
//? true

const isValidPalindrome = (str) => {
  const helperIsPalindrome = (start, end) => {
    while (start < end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  };

  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return (
        helperIsPalindrome(start + 1, end) || helperIsPalindrome(start, end + 1)
      );
    }
    start++;
    end--;
  }

  return true;
};

const str = "A B C E B A";
console.log(isValidPalindrome(str));

//* ================== Task 5 ===================

//? String berilgan agar xohlagan bitta harf ni o'chirsak u palindrom bo'ladimi ?
//? agar bo'lsa : True
//? bo'lsa : False

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
console.log(isPalindromeWithOneRemove("kiyik"));

const SortColors = (color) => {
  let start = 0;
  let end = color.length - 1;
  let mid = 0;

  while (mid <= end) {
    if (color[mid] === 0) {
      [color[start], color[mid]] = [color[mid], color[start]];
      start++;
      mid++;
    } else if (color[mid] === 1) {
      mid++;
    } else {
      [color[end], color[mid]] = [color[mid], color[end]];
      end--;
    }
  }

  return color;
};

const arr = [0, 1, 0, 2, 1, 2, 0, 2];
// console.log(SortColors(arr));
