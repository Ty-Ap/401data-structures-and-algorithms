'use strict';



class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
};

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k).fill(null);
  };
};

class KaryTree {
  constructor() {
    this.root = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    
  }
  

  preOrder() {
    const walk = (node) => {

      results.push(node);

      if (node.left) {
        walk(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
  }

  inOrder() {
    const walk = (node) => {

      if (node.left) {
        walk(node.left)
      };

      console.log(node.value);

      if (node.right) {
        walk(node.right);
      }
    }
    walk(this.root);
  }

  postOrder() {
    const walk = (node) => {


      if (node.left) {
        walk(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      console.log(node.value);
    }
  }

}


let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

module.exports = {Tree, Node};


