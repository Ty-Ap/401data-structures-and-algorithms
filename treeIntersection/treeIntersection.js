const {Tree, Node, binaryTree} = require('../binary-trees/binaryTree');
const hashMap = require('../hashTable/hashTable');

'use strict';

let tree1 = new binaryTree();
tree1.add(10);
tree1.add(5);
tree1.add(15);
tree1.add(1);
tree1.add(8);
tree1.add(17);

let tree2 = new binaryTree();
tree2.add(8);
tree2.add(17);
tree2.add(20);
tree2.add(5);
tree2.add(30);



function tree_intersection(tree1, tree2) {
  const hashMapInstance = new hashMap(100);
  const resultSet = new Set();

  function inOrderTraversal(node, callback) {
    if (node) {
      inOrderTraversal(node.left, callback);
      callback(node.value);
      inOrderTraversal(node.right, callback);
    }
  }

  // Traverse the first tree and store its values in the hash table
  inOrderTraversal(tree1.root, (value) => {
    hashMapInstance.set(value, true);
  });

  // Traverse the second tree and check if values are in the hash table
  inOrderTraversal(tree2.root, (value) => {
    if (hashMapInstance.has(value)) {
      resultSet.add(value);
    }
  });

  return resultSet;
}

const intersection = tree_intersection(tree1, tree2);

console.log(intersection)

module.exports = {tree_intersection};
