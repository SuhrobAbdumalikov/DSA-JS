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

  log() {
    console.log(this.root);
  }
}

let tree = new BST();

// tree.root = new Node(10);
// tree.root.right = new Node(12);
// tree.root.left = new Node(7);
// tree.root.right.right = new Node(14);
// tree.root.right.left = new Node(11);
// tree.root.left.right = new Node(8);
// tree.root.left.left = new Node(6);

tree.Insert(10);
tree.Insert(12);
tree.Insert(7);

tree.log();
