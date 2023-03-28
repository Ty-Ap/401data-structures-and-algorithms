const { Tree, binaryTree } = require('../binary-trees/binaryTree');
const { tree_intersection } = require('./treeIntersection');

describe('tree_intersection', () => {
  let tree1;
  let tree2;

  beforeEach(() => {
    tree1 = new binaryTree();
    tree2 = new binaryTree();
  });

  test('should return an empty set when both trees are empty', () => {
    const result = tree_intersection(tree1, tree2);
    expect(result.size).toBe(0);
  });

  test('should return an empty set when trees have no common values', () => {
    tree1.add(10);
    tree1.add(5);
    tree1.add(15);

    tree2.add(20);
    tree2.add(25);
    tree2.add(30);

    const result = tree_intersection(tree1, tree2);
    expect(result.size).toBe(0);
  });

  test('should return a set of common values when trees have overlapping values', () => {
    tree1.add(10);
    tree1.add(5);
    tree1.add(15);
    tree1.add(1);
    tree1.add(8);
    tree1.add(17);

    tree2.add(8);
    tree2.add(17);
    tree2.add(20);
    tree2.add(5);
    tree2.add(30);

    const result = tree_intersection(tree1, tree2);
    expect(result.size).toBe(3);
    expect(result.has(5)).toBeTruthy();
    expect(result.has(8)).toBeTruthy();
    expect(result.has(17)).toBeTruthy();
  });
});