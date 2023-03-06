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


  add(value) {
    const node = new Node(value);
    if (this.root === null) {
      return this.root = node;

    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }




  contains(query){
    const walk = (node)=>{
      if (!node) { // base case: node is null
        return false;
      }
  
      if(walk(node.right) === query || walk(node.left) === query){
        return true;
      } else {
        return false;
      }


    }
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


let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

module.exports = {Tree, Node};


