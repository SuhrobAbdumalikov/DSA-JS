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

  //! home task in Tree ===========
  Find(val, node = this.root) {
    if (!node) {
      return null;
    } else if (val === node.val) {
      return node;
    } else if (val > node.val) {
      return this.Find(val, node.right);
    } else {
      return this.Find(val, node.left);
    }
  }

  Contain(val) {
    return this.Find(val) ? true : false;
  }

  FindMin() {
    let current = this.root;
    if (!current) {
      return null;
    }

    while (current.left) {
      current = current.left;
    }
    return current;
  }

  FindMax() {
    let current = this.root;
    if (!current) {
      return null;
    }

    while (current.right) {
      current = current.right;
    }
    return current;
  }

  FindSecondMax() {
    let current = this.root;
    let secondCurrent = null;

    if (!current || (!current.right && !current.left)) {
      console.log(`There is no any tree second Max Value`);
      return;
    }

    while (current.right) {
      secondCurrent = current;
      current = current.right;
    }

    return secondCurrent.val;
  }

  log() {
    console.log(this.root);
  }
}

let tree = new BST();

tree.Insert(10);
tree.Insert(12);
tree.Insert(7);
tree.Insert(6);
tree.Insert(8);
tree.Insert(14);
tree.Insert(11);
tree.Insert(18);

tree.log();
