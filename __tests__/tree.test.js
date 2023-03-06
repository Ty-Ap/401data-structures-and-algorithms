'use strict';


const {Node, Tree} = require('../binary-trees/binaryTree');

describe ('Tree', ()=> {
  let tree = new Tree();





  it('can be created as expected', ()=> {
    tree.add(10);


    expect(tree.root.value).toEqual(10);

  })

  test('can instantiate a tree with a single root node', () => {
    
    tree.add(10);
    expect(tree.root).not.toBeNull();
    expect(tree.root.value).toBe(10);
  });

  test('can add left and right child nodes to a node', () => {
    tree.add(5);
    tree.add(3);
    tree.add(7);
    expect(tree.root).not.toBeNull();
    expect(tree.root.value).toBe(5);
    expect(tree.root.left).not.toBeNull();
    expect(tree.root.left.value).toBe(3);
    expect(tree.root.right).not.toBeNull();
    expect(tree.root.right.value).toBe(7);
  });

  test('can return a collection from a preorder traversal', () => {
    tree.add(5);
    tree.add(3);
    tree.add(7);
    tree.add(2);
    tree.add(4);
    tree.add(6);
    tree.add(8);
    const preorder = tree.preOrder();
    expect(preorder).toEqual([5, 3, 2, 4, 7, 6, 8]);
  });

  test('can return a collection from an inorder traversal', () => {
    tree.add(5);
    tree.add(3);
    tree.add(7);
    tree.add(2);
    tree.add(4);
    tree.add(6);
    tree.add(8);
    const inorder = tree.inOrder();
    expect(inorder).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  test('can return a collection from a postorder traversal', () => {
    tree.add(5);
    tree.add(3);
    tree.add(7);
    tree.add(2);
    tree.add(4);
    tree.add(6);
    tree.add(8);
    const postorder = tree.postOrder();
    expect(postorder).toEqual([2, 4, 3, 6, 8, 7, 5]);
  });

  test('returns false for contains method given an empty tree', () => {
    expect(tree.contains(7777)).toBeFalsy();
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
});

