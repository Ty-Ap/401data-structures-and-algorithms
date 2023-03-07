'use strict';


const {binaryTree, Node, Tree,breadthFirst} = require('../binary-trees/binaryTree');

describe ('Tree', ()=> {
  let tree = new Tree();





  it('can be created as expected', ()=> {
    tree.add(10);


    expect(tree.root.value).toEqual(10);

  });

  test('can instantiate a tree with a single root node', () => {
    
    tree.add(10);
    expect(tree.root).not.toBeNull();
    expect(tree.root.value).toBe(10);
  });

  test('returns false for contains method given a non-existing node value', () => {
    tree.add(5);
    tree.add(3);
    tree.add(7);
    expect(tree.contains(2)).toBeFalsy();
  });

  test('returns true for contains method given an existing node value', () => {
    tree.add(5);
    tree.add(3);
    tree.add(7);
    expect(tree.contains(3)).toBeTruthy();
  });

  it('adds to binary search tree', () => {
    const bTree = new binaryTree();
    bTree.add(8);
    bTree.add(3);
    bTree.add(5);
    bTree.add(10);

    expect(bTree.root.value).toEqual(8);
    expect(bTree.root.left.value).toEqual(3);
    expect(bTree.root.left.right.value).toEqual(5);
    expect(bTree.root.right.value).toEqual(10);
    
  });
  
  it('breadthFirst works', () => {
    let tree = new Tree();
    tree.root = new Node(5);
    tree.root.left = new Node(1);
    tree.root.right = new Node(8);
    tree.root.left.left = new Node(10);

    let breadth = breadthFirst(tree);
    expect(breadth).toEqual([5,1,8,10]);

  });
});

