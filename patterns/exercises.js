//!  Valid Anagram
const isAnagram = function (s, t) {
  let count = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (count[char]) {
      count[char]--;
    } else {
      return false;
    }
  }

  console.log(count);
  return Object.values(count).every((count) => count === 0);
};
// console.log(isAnagram("acc", "cca"));

//! Contain Duplicate
const containsDuplicate = function (arrNum) {
  //   let hash = {};
  //   for (let i = 0; i < arrNum.length; i++) {
  //     let val = arrNum[i];
  //     if (!hash[val]) {
  //       hash[val] = 1;
  //     } else {
  //       hash[val] += 1;
  //     }
  //   }
  //   return Object.values(hash).some((num) => num > 1);
  //!===========
  // arrNum.sort((a, b) => a - b);
  // for (let i = 0; i < arrNum.length; i++) {
  //   if (arrNum[i] === arrNum[i + 1]) {
  //     return true;
  //   }
  // }
  // return false;
};
// console.log(containsDuplicate([1, 2, 3, 4]));

//! Two Sums
const twoSum = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const complement = target - num;
    const complementIndex = arr.indexOf(complement, i + 1);
    if (complementIndex !== -1) {
      return [i, complementIndex];
    }
  }
  return null;
};

//!  Group Anagrams
const groupAnagrams = function (str) {
  //   let hash = {}

  //   for (let val of str) {
  //     let sortedWord = val.split("").sort().join("");
  //     if (hash[sortedWord]) {
  //       hash[sortedWord].push(val);
  //     } else {
  //       hash[sortedWord] = [val];
  //     }
  //   }

  //   return Object.values(hash);

  let hash = new Map();
  let arr = new Array(256).fill(0);

  for (const s of str) {
    for (const char of s) {
      arr[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    let k = arr.join("#");
    if (!hash.has(k)) {
      hash.set(k, []);
    }
    hash.get(k).push(s);
  }

  return Array.from(hash.values());
};

//! Top K Frequency
const topKFrequent = function (arr, k) {
  // const freqMap = new Map();
  // for (const num of arr) {
  //   freqMap.set(num, (freqMap.get(num) || 0) + 1);
  // }

  // const freqList = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);

  // const topK = freqList.slice(0, k).map(([num]) => num);

  // return topK;

  const map = new Map();
  let freqA = new Array(arr).fill().map(() => []);
  let res = [];

  console.log(freqA);

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let [k, v] of map.entries()) {
    freqA[v].push(k);
  }

  for (let i = freqA.length - 1; i > 0; i--) {
    for (let j of freqA[i]) {
      if (res.length - 1 !== k) {
        res.push(j);
      }
    }
  }

  return res;
};
// console.log(topKFrequent([1, 1, 2, 3, 1]));

//!  Best time to buy
const maxProfit = function (prices) {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};

//!  Longest repeating character
const characterReplacement = function (str, k) {
  let left = 0;
  let right = 0;
  let count = new Map();
  let res = 0;

  for (right = 0; right < str.length; right++) {
    let wLen = right - left + 1;
    count.set(str[right], 1 + count.get(str[right]) || 1);

    if (wLen - Math.max(...count.values()) > k) {
      count.set(str[left], count.get(str[left]) - 1);
      left++;
    }
    wLen = right - left + 1;
    res = Math.max(res, wLen);
  }
  return res;
};

//!  Sliding Window Maximum
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //  add value to the beginning of the list
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  //  add value to the end of the list
  push(value) {
    const newNode = new Node(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  //  remove value from the beginning of the list
  shift() {
    if (!this.head) {
      return null;
    }

    const removed = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
    }

    this.length--;

    return removed.value;
  }

  //  remove value from the end of the list
  pop() {
    if (!this.tail) {
      return null;
    }

    const removed = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
    }

    this.length--;

    return removed.value;
  }

  // get the front value
  peekFront() {
    return this.head ? this.head.value : null;
  }

  // get the last value
  peekBack() {
    return this.tail ? this.tail.value : null;
  }
}

const cleanUp = (i, d, numbers) => {
  while (d.length !== 0 && numbers[i] >= numbers[d.peekBack()]) {
    d.pop();
  }
};

const maxSlidingWindow = function (arr, k) {
  const d = new Deque();
  let output = [];

  for (let i = 0; i < k; i++) {
    cleanUp(i, d, arr);
    d.push(i);
  }

  output[0] = arr[d.peekFront()];

  for (let i = k; i < arr.length; i++) {
    cleanUp(i, d, arr);

    if (d.length !== 0 && d.peekFront() <= i - k) {
      d.shift();
    }

    d.push(i);
    output[i - k + 1] = arr[d.peekFront()];
  }

  return output;
};

//!  Valid Parentheses
const isValid = function (s) {
  const stack = [];
  const mapping = { ")": "(", "}": "{", "]": "[" };

  for (let char of s) {
    if (char in mapping) {
      const topElement = stack.pop() || "#";
      if (mapping[char] !== topElement) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

//!  Min Stack
var MinStack = function () {
  this.items = [];
  this.topItem = null;
};

MinStack.prototype.push = function (val) {
  this.items.push(val);
  this.topItem = val;
};

MinStack.prototype.pop = function () {
  if (this.items.length > 0) {
    this.items.pop();
    this.topItem =
      this.items.length > 0 ? this.items[this.items.length - 1] : null;
  }
};

MinStack.prototype.top = function () {
  return this.topItem;
};

MinStack.prototype.getMin = function () {
  if (this.items.length === 0) return null;
  let min = this.items[0];
  for (let i = 1; i < this.items.length; i++) {
    if (this.items[i] < min) {
      min = this.items[i];
    }
  }
  return min;
};

//!  Generate Parentheses
var generateParenthesis = function (n) {
  const result = [];

  const generate = (leftCount, rightCount, current) => {
    if (leftCount === n && rightCount === n) {
      result.push(current);
      return;
    }

    if (leftCount < n) {
      generate(leftCount + 1, rightCount, current + "(");
    }

    if (rightCount < leftCount) {
      generate(leftCount, rightCount + 1, current + ")");
    }
  };

  generate(0, 0, "");
  return result;
};

//! Product of Array Except Self
var productExceptSelf = function (nums) {
  let newArr = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    newArr[i] = newArr[i - 1] * nums[i - 1];
  }

  let p = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    newArr[i] *= p;
    p *= nums[i];
  }

  return newArr;
};
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));

//! Longest Consecutive Sequence
const longestConsecutive = function (nums) {
  // const numSet = new Set(nums);
  // let longestStreak = 0;

  // for (const num of numSet) {
  //   if (!numSet.has(num - 1)) {
  //     let currentNum = num;
  //     let currentStreak = 1;

  //     while (numSet.has(currentNum + 1)) {
  //       currentNum++;
  //       currentStreak++;
  //     }

  //     longestStreak = Math.max(longestStreak, currentStreak);
  //   }
  // }

  // return longestStreak;

  //? second solve
  if (!nums.length) return 0;

  nums.sort((a, b) => a - b);

  let count = 1;
  let max = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    if (nums[i] === nums[i - 1] + 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }

  return Math.max(max, count);
};

// console.log(longestConsecutive([0, 1, 2, 3, 5, 0]));

//! Valid Sudoku
var isValidSudoku = function (board) {
  let set = new Set();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let current = board[r][c];

      if (current !== ".") {
        let rowk = `row-${r}-${current}`;
        let colk = `col-${c}-${current}`;
        let boxk = `box-${Math.floor(r / 3)}-${Math.floor(c / 3)}-${current}`;

        if (set.has(rowk) || set.has(colk) || set.has(boxk)) {
          return false;
        } else {
          set.add(rowk);
          set.add(colk);
          set.add(boxk);
        }
      }
    }
  }
  return true;
};

const arr = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// console.log(isValidSudoku(arr));

//! Sliding Window Exercises ==================================//

//! Valid Palindrome
//? 1 variant
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return s === s.split("").reverse().join("");
}
//? 2 variant
function isAlphanumeric(char) {
  return (
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z") ||
    (char >= "0" && char <= "9")
  );
}

function isPalindrome(s) {
  s = s.toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
