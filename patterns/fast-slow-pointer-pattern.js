//! ===========> Happy Number <============

const getSum = (num) => {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit ** 2;
    num = Math.floor(num / 10);
  }
  return sum;
};

const isHappyNumber = (num) => {
  let fast = num;
  let slow = num;

  while (true) {
    slow = getSum(slow);
    fast = getSum(getSum(fast));

    if (slow === fast) {
      break;
    }
  }

  if (slow === 1) {
    return true;
  }
  return false;
};

// console.log(isHappyNumber(19));
// console.log(isHappyNumber(2));

//! =============> find middle of LinkedList <==============
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
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.length++;
    return this;
  }
}

const FindMidLinkedList = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const linkedList = new LinkedList();
linkedList.Push(10);
linkedList.Push(12);
linkedList.Push(14);
linkedList.Push(16);
linkedList.Push(18);
// console.log(linkedList);
// console.log("Mid of linkedList:", FindMidLinkedList(linkedList.head));

//? ===========>> HomeTask <<=============//
//! =====> epam interview question <=====
const foo = (arr, target) => {};
const arr = [2, 4, 6, 3, 7];
target = 9;
//! circular array loop,duplicate numbers,isPalindrome

//*============>> Circular Array <<=============//
const IsCircularArray = (num) => {
  const getNextIdx = (idx) => {
    return (idx + num[idx] + num.length) % num.length;
  };

  for (let i = 0; i < num.length; i++) {
    let slow = i;
    let fast = i;

    while (true) {
      slow = getNextIdx(slow);
      fast = getNextIdx(getNextIdx(fast));

      if (slow === fast) {
        if (slow === getNextIdx(slow)) {
          break;
        } else {
          return true;
        }
      }

      if (
        num[slow] * num[getNextIdx(slow)] <= 0 ||
        num[fast] * num[getNextIdx(fast)] <= 0
      ) {
        break;
      }
    }
  }
};

// console.log(IsCircularArray([3, 1, 2]));

//* =============>> Duplicate numbers <<============//
function removeDuplicates(num) {
  let obj = {};
  let slow = 0;

  for (let fast = 0; fast < num.length; fast++) {
    if (!obj[num[fast]]) {
      obj[num[fast]] = true;
      if (slow !== fast) {
        num[slow] = num[fast];
      }
      slow++;
    }
  }

  return num.slice(0, slow);
}

let num = [1, 5, 2, 8, 9, 2, 5, 9, 7, 1, 3, 5, 8, 6, 7, 3, 2, 4];
let res = removeDuplicates(num);
// console.log(res);

//* ===========>> IsPalindrome <<=========//
const isPalindrome = (head) => {
  let array = [];
  let current = head;

  while (current) {
    array.push(current.value);
    current = current.next;
  }

  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    if (array[start] !== array[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

linkedList.Push(11);
linkedList.Push(15);
linkedList.Push(12);
linkedList.Push(19);
linkedList.Push(14);
linkedList.Push(17);

console.log(isPalindrome(linkedList.head));
