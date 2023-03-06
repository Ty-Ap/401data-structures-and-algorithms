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

class binaryTree extends Tree{
  super() {
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
        walk(node.right);
      }
      console.log(node.value);
    }
  }

}

class Tree {
  constructor() {
    this.root = null;
    
  }


  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;

    while (current) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }






 contains(value) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let temp = false;

    while (current && !temp) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else if (value === current.value) {
        temp = true;
      }
    }
    return temp;
  }
}


let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

module.exports = {Tree, Node, binaryTree};


