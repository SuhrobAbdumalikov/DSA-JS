//! ==========>> Stuck <<==============//
class Stuck {
  constructor() {
    this.items = [];
    this.top = null;
  }

  Push(data) {
    this.items.push(data);
    this.top = data;
  }

  Pop() {
    if (this.items.length !== 0) {
      this.top = null;
      if (this.items.length === 1) {
        this.top = null;
        this.items.pop();
      }
      if (this.items.length > 1) {
        this.top = this.items[this.items.length - 2];
        this.items.pop();
      }
    } else return null;
  }

  GetTop() {
    return this.items.length - 1;
  }

  Sort() {
    this.top = this.items[0];
    let lang = this.items.length;
    for (let i = 0; i < lang; i++) {
      for (let j = 0; j < lang; j++) {
        if (lang[j] > lang[j - 1]) {
          let sNum = lang[j];
          lang[j] = lang[j - 1];
          lang[j - 1] = sNum;
        }
      }
    }
    return lang;
  }
}

const stuck = new Stuck();
stuck.Push(1);
stuck.Push(3);

//! ==============>> Queue <<==================//

class Queue {
  constructor() {
    this.items = [];
    this.top = null;
  }

  Enqueue(data) {
    return this.items.push(data);
  }
  Dequeue() {
    this.items.shift();
  }

  Size() {
    return this.items.length;
  }

  IsEmpty() {
    return this.items.length === 0;
  }

  GetFront() {
    this.items[0];
  }
}

const queue = new Queue();
queue.Enqueue("hello world");
queue.Enqueue("Salom Dunyo");

//* =============>> Stuck and Queue in LinkedList <<==================//

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class QueueAndStuckLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //! Stuck To List ==========

  Push(data) {
    let node = new Node(data);
    let current = this.head;
    if (!this.head) {
      this.head = node;
      this.length++;
      return this;
    }

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this.length++;
    return this;
  }

  Pop() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    this.length--;
    current.next = null;
    return current;
  }

  //! Queue To List =========

  Enqueue(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  Dequeue() {
    if (!this.head) {
      return null;
    }

    const shiftData = this.head.data;
    this.head = this.head.next;

    this.length--;
    return shiftData;
  }

  //! These Methods is similar in Queue and Stuck in LinkedList

  GetTop() {
    return this.head;
  }

  Size() {
    return this.length;
  }

  IsEmpty() {
    if (this.head === null) {
      return "Yes";
    }
    return "No";
  }
}

const mixList = new QueueAndStuckLinkedList();

mixList.Push(1);
mixList.Push(2);
mixList.Enqueue(3);
mixList.Enqueue(4);

console.log(mixList);

mixList.Dequeue();

console.log("after", mixList);
