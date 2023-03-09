function fizzBuzzTree(tree){
  let returnTree = tree;
  let root = returnTree.root;
  const traverse = (node) => {
    if(node.value % 5 === 0 && node.value % 3 === 0) node.value = 'fizzBuzz';
    else if (node.value % 5 === 0) node.value = 'buzz';
    else if (node.value % 3 === 0) node.value = 'fizz';
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(root);
  return returnTree;
}

module.exports = fizzBuzzTree;
