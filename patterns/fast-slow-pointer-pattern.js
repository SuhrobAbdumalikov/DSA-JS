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