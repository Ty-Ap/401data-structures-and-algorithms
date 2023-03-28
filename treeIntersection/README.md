# Tree Intersection

The challenge of this problem is to find common values in two binary trees. Given two binary trees, return a set of values found in both trees using the tree_intersection function.

## Whiteboard Process

![uml](../assets/Untitled%20(7).png)

## Approach & Efficiency

The approach used in this solution is to traverse both trees in-order and store their values in a hash table. The hash table is used for quick lookups to determine if a value is present in both trees. The time complexity is O(n) for both trees, where n is the number of nodes in the tree. The space complexity is also O(n) for both trees, since we're storing the values in a hash table.

## Solution

<!-- solution lives in code file and tests-->
