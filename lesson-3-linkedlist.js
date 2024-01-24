//=============>> LINKEDLIST <<=============//

// create node
class Node {
  constructor(data, next = null) {
    // ======>> data is empty now!
    this.data = data;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  Push(data) {
    let node = new Node(data);
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

  Search(data) {
    let current = this.head;
    let length = 0;
    while (current) {
      length++;
      if (current.data === data) {
        return length;
      }
      current = current.next;
    }
    return -1;
  }

  Unshift(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    return this;
  }

  Pop() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  DelDuplicate() {
    let current = this.head;
    while (current) {
      if (!hash[current.data]) {
        hash[current.data] = 1;
      } else {
        hash[current.data] += 1;
        console.log(current.data);
      }
      current = current.next;
    }
    console.log(hash);
  }

  ReturnN(num) {
    let p1 = this.head;
    let p2 = this.head;
    let count = 0;
    while (p1 && count > num) {
      p1 = p1.next;
      count++;
    }
    while (p1) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p2;
  }

  ReverseList() {
    let current = this.head;
    let next = null;
    let prev = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
}

let list = new List();

list.Push(1);
list.Push(2);
list.Push(3);
list.Push(4);

console.log(list.ReverseList());
