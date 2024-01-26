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

  DFSPreOrder() {
    //! PRE ORDER arraydagi birinchi element root ning ozi boladi pre orderdaa.
    var data = [];
    function traverse(node) {
      node.val && data.push(node.val);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    var data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    var data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }
    traverse(this.root);
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
console.log("In Order", tree.DFSInOrder());
console.log("Post Order", tree.DFSPreOrder());
console.log("Pre Order", tree.DFSPostOrder());
console.log("BFS", tree.BFS());

//! homework => "DFS val change to indicator use loop" (and) "BFS => change to recursion"
