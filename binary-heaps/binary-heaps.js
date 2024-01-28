class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class MaxHeap {
  constructor(arr) {
    this.items = [...arr];
  }

  Insert(val) {
    this.items.push(val);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let idx = this.items.at(-1);
    let val = this.items[idx];
    while (idx > 0) {
      let pI = this.GetParentIdx(idx);
      let parent = this.items[pI];

      if (val <= parent) {
        break;
      } else {
        this.Swap(idx, pI);
      }

      idx = pI;
    }
  }

  GetParentIdx(val) {
    return Math.floor((val - 1) / 2);
  }

  Swap(i, j) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }

  GetRightChild(idx) {
    return 2 * idx + 2;
  }

  GetLeftChild(idx) {
    return 2 * idx + 1;
  }

  isHeap() {
    for (let i = 0; i < this.items.length; i++) {
      const leftChildIndex = this.GetLeftChild(i);
      const rightChildIndex = this.GetRightChild(i);

      const currentElement = this.items[i];
      const leftChild = this.items[leftChildIndex];
      const rightChild = this.items[rightChildIndex];

      if (
        (leftChildIndex && currentElement < leftChild) ||
        (rightChildIndex && currentElement < rightChild)
      ) {
        return false;
      }
    }
    return true;
  }

  heapify() {
    const n = this.items.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.sinkDown(i, n);
    }
  }

  sinkDown(index, heapSize) {
    const leftChildIndex = this.GetLeftChild(index);
    const rightChildIndex = this.GetRightChild(index);

    let largestIndex = index;

    if (
      leftChildIndex < heapSize &&
      this.items[leftChildIndex] > this.items[largestIndex]
    ) {
      largestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < heapSize &&
      this.items[rightChildIndex] > this.items[largestIndex]
    ) {
      largestIndex = rightChildIndex;
    }

    if (largestIndex !== index) {
      [this.items[index], this.items[largestIndex]] = [
        this.items[largestIndex],
        this.items[index],
      ];
      this.sinkDown(largestIndex, heapSize);
    }
  }
}

const heaps = new MaxHeap([]);

heaps.Insert(10);
heaps.Insert(12);
heaps.Insert(8);
heaps.Insert(15);
heaps.Insert(6);

console.log(heaps);

//! => right child,left child, remove,sinkDown,isHeap,heapfy() => heap yasash;
