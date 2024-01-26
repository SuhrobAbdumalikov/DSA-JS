class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  Insert(val, node = this.root) {
    let current = node;
    let newNode = new Node(val);
    if (!current) {
      this.root = newNode;
      return this;
    }
    while (true) {
      if (current.val === newNode.val) {
        return this;
      }
      if (current.val < newNode.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  DFSPreOrderWithLoop() {
    let current = this.root;
    let data = [];
    let queue = [];

    while (current || queue.length) {
      if (current) {
        data.push(current.val);
        if (current.right) {
          queue.push(current.right);
        }
        current = current.left;
      } else {
        current = queue.pop();
      }
    }
    return data;
  }

  DFSInOrderWithLoop() {
    var data = [];
    var queue = [];
    var current = this.root;

    while (current || queue.length) {
      if (current) {
        queue.push(current);
        current = current.left;
      } else {
        let node = queue.pop();
        data.push(node.val);
        current = node.right;
      }
    }

    return data;
  }

  BFSWithLoop() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

const tree = new BST();
tree.Insert(10);
tree.Insert(6);
tree.Insert(3);
tree.Insert(8);
tree.Insert(15);
tree.Insert(20);

console.log(tree);
console.log("Pre Order Loop", tree.DFSPreOrderWithLoop());
console.log("In Order Loop", tree.DFSInOrderWithLoop());
console.log("BFS Loop", tree.BFSWithLoop());
