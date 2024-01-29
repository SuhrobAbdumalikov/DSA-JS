class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  Enqueue(val, priority) {
    let node = new Node(val, priority);
    this.items.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.items.at(-1);
    let val = this.items[idx];

    while (idx > 0) {
      let pI = this.getParentIdx(idx);

      if (val < pI) {
        break;
      } else {
        this.swap(idx, pI);
        idx = pI;
      }
    }
  }

  getParentIdx(val) {
    return Math.floor((val - 1) / 2);
  }

  swap(i, j) {
    [this.items[i], (this.items[j] = this.items[j]), this.items[i]];
  }
}

const pQueue = new PriorityQueue();
pQueue.Enqueue("hello world", 4);
pQueue.Enqueue("salom dunyo", 2);
pQueue.Enqueue("Assalomu alaykum", 3);

console.log(pQueue);
